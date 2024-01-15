import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Dialog } from 'antd-mobile';

import { Btn, Mask, Prize } from '@/components';
import { useUser } from '@/components/UserContext';

import styles from './index.module.less';

const UserPoints = () => {
  const { userInfo } = useUser();
  if (!userInfo) return null;
  return (
    <>
      <div className={styles.expend}>消耗168积分</div>
      <div className={styles.surplus}>
        当前剩余积分：{userInfo.points} <span>如何获取积分</span>
      </div>
    </>
  );
};

const SummonBtn = ({ inMask }) => {
  const { userInfo, login } = useUser();
  const [open, setOpen] = useState(false);

  const handleSummon = () => {
    if (!userInfo) return login();
    Dialog.show({
      content: '是否确认消耗xxx积分进行抽取',
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
      onAction: (action) => {
        if (action.key !== 'ok') return;
        console.log('actionaa');
        setOpen(true);
      },
    });
  };
  return (
    <div className={`${styles.bottom} ${inMask && styles.mask}`}>
      <Btn className={styles.btn} onClick={handleSummon}>
        {inMask ? '就你了' : '立即召唤'}
      </Btn>
      <UserPoints />
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
