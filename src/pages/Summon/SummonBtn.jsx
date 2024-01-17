import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Dialog } from 'antd-mobile';

import * as API from '@/api';
import { Btn, Mask, Prize } from '@/components';
import { useUser } from '@/components/UserContext';

import styles from './index.module.less';

const UserPoints = ({ summonData }) => {
  const { userInfo } = useUser();
  if (!userInfo) return null;
  return (
    <>
      <div className={styles.expend}>消耗{summonData.cost_score}积分</div>
      <div className={styles.surplus}>
        当前剩余积分：{summonData.left_score} <span>如何获取积分</span>
      </div>
    </>
  );
};

const SummonBtn = ({ inMask, summonData, setSummonData }) => {
  const { userInfo, login } = useUser();
  const [open, setOpen] = useState(false);
  console.log('userInfo', userInfo);

  const handleSummon = () => {
    if (!userInfo) return login();
    Dialog.show({
      content: `是否确认消耗${summonData.cost_score}积分进行抽取`,
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
        const data = await API.summon({ openid: userInfo.openid, is_free: 0 });
        setOpen(true);
        setSummonData(data);
      },
    });
  };

  return (
    <div className={`${styles.bottom} ${inMask && styles.mask}`}>
      <Btn className={styles.btn} onClick={handleSummon}>
        {inMask ? '就你了' : '立即召唤'}
      </Btn>
      <UserPoints summonData={summonData} />
      <Mask
        open={open}
        afterClose={() => setOpen(false)}
        afterShow={() => {
          console.log('afterShow');
        }}
      >
        <Prize isShare />
      </Mask>
    </div>
  );
};

export default SummonBtn;
