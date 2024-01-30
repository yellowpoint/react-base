import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Dialog, Button, Space } from 'antd-mobile';
import { motion } from 'framer-motion';

import API from '@/api';
import { Btn, Mask, Prize, Filp } from '@/components';
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
  // 抽完没合成龙卡
  const handleOverNotlong = () => {
    Dialog.show({
      content: (
        <div style={{ textAlign: 'center' }}>
          恭喜您！
          <br />
          抽得所有星座
          <br />
          快去合成隐藏款吧~
        </div>
      ),
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
  };
  // 所以都集齐了
  const handleAllOver = () => {
    const handler = Dialog.show({
      closeOnMaskClick: true,
      content: (
        <div style={{ textAlign: 'center' }}>
          恭喜您！
          <br />
          已经完成了丁丁12星座藏品之旅！
          <img
            className={styles.dialogClose}
            onClick={() => handler.close()}
            src={`${import.meta.env.BASE_URL}imgs/home/x.png`}
          />
        </div>
      ),
    });
  };
  const handleSummon = () => {
    if (!userInfo) return login();
    if (userInfo.is_all_card_collected === 1) {
      return handleAllOver();
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
          return handleOverNotlong();
        }
        setSummonData(data);
        setOpen(true);
      },
    });
  };
  const mockSummon = (card_id) => {
    if (card_id === -1) {
      return handleAllOver();
    }
    if (card_id === -2) {
      return handleOverNotlong();
    }
    setSummonData({ ...summonData, card_id, nft_code: '1365033310' });
    setOpen(true);
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
      <Space wrap>
        <Button color="primary" fill="solid" onClick={() => mockSummon(0)}>
          模拟抽中星座1
        </Button>
        <Button color="primary" fill="solid" onClick={() => mockSummon(1)}>
          模拟抽中星座2
        </Button>
        <Button color="primary" fill="solid" onClick={() => mockSummon(201)}>
          模拟抽中红包
        </Button>
        <Button color="primary" fill="solid" onClick={() => mockSummon(101)}>
          模拟抽中隐藏款
        </Button>
        <Button color="primary" fill="solid" onClick={() => mockSummon(-2)}>
          模拟抽完未合成
        </Button>
        <Button color="primary" fill="solid" onClick={() => mockSummon(-1)}>
          模拟完成旅途
        </Button>
      </Space>

      <UserPoints summonData={summonData} hasFree={hasFree} />
      <Mask open={open} afterClose={() => setOpen(false)}>
        <Filp
          back={
            <Prize isShare id={summonData.card_id} item={summonData} filp />
          }
          front={
            <div className={styles.boxFront}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}imgs/summon/box${
                    (summonData?.swiperIndex || 0) + 1
                  }.png`}
                  alt="盲盒"
                />
              </motion.div>
            </div>
          }
        />
      </Mask>
    </div>
  );
};

export default SummonBtn;
