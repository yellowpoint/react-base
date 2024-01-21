import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Dialog } from 'antd-mobile';

import API from '@/api';
import { Btn, Mask, Prize } from '@/components';
import { memberLevelUrl } from '@/components/const';
import { useUser } from '@/components/UserContext';

import { useSummonContext } from './SummonContext';

import styles from './index.module.less';

const UserPoints = ({ hasFree }) => {
  const { userInfo } = useUser();
  const { summonData, setSummonData } = useSummonContext();

  if (!userInfo) return null;
  if (summonData.disabled) return null;
  if (hasFree) return null;
  return (
    <>
      <div className={styles.expend}>消耗{summonData.cost_score}积分</div>
      <div className={styles.surplus}>
        当前剩余积分：{summonData.left_score}
        <a
          href={memberLevelUrl}
          target="_blank"
          rel="noreferrer"
        >{`如何获取积分`}</a>
      </div>
    </>
  );
};

const SummonBtn = ({ inMask }) => {
  const { userInfo, login } = useUser();
  const { summonData, setSummonData } = useSummonContext();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const hasFree = summonData.free_times > 0;
  const getTips = () => {
    if (hasFree) return '一次免费次数';
    return `${summonData.cost_score}积分`;
  };
  const handleSummon = () => {
    if (!userInfo) return login();
    if (userInfo.is_all_card_collected === 1) {
      Dialog.alert({
        content: (
          <div>
            恭喜你，已经完成了丁丁12星座藏品之旅！
            <br />
            丁丁12星座的保护力陪伴着你成长！
          </div>
        ),
      });
      return;
    }
    // 没有免费次数且积分不够下一次抽奖
    if (!hasFree && summonData.cost_score > summonData.left_score) {
      Dialog.alert({
        content: '积分不够哟~',
      });
      return;
    }
    Dialog.show({
      content: `是否确认消耗${getTips()}进行抽取`,
      closeOnAction: true,
      actions: [
        [
          {
            key: 'cancel',
            text: '取消',
          },
          {
            key: 'ok',
            text: '确认',
            danger: true,
          },
        ],
      ],
      onAction: async (action) => {
        if (action.key !== 'ok') return;
        // 0,不免费;1,免费;默认;
        const data = await API.summon({ is_free: hasFree ? 1 : 0 });
        // const data = { card_id: 1 };
        if (data === 12) {
          Dialog.show({
            content: `已抽得所有卡片，快去合成隐藏款吧~`,
            closeOnAction: true,
            actions: [
              [
                { key: 'cancel', text: '取消' },
                { key: 'ok', text: '确认', danger: true },
              ],
            ],
            onAction: async (action) => {
              if (action.key !== 'ok') return;
              navigate('/my');
            },
          });
          return;
        }
        setSummonData(data);
        setOpen(true);
      },
    });
  };

  return (
    <div className={`${styles.bottom} ${inMask && styles.mask}`}>
      <Btn
        className={styles.btn}
        onClick={handleSummon}
        disabled={summonData.disabled}
      >
        {inMask ? '就你了' : '立即召唤'}
      </Btn>
      <UserPoints summonData={summonData} hasFree={hasFree} />
      <Mask open={open} afterClose={() => setOpen(false)}>
        {summonData?.card_id !== undefined && (
          <Prize isShare id={summonData.card_id} />
        )}
      </Mask>
    </div>
  );
};

export default SummonBtn;
