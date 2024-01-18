import { useState } from 'react';

import { Dialog } from 'antd-mobile';

import { Mask, Prize } from '@/components';
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

const Exchange = () => {
  const [open, setOpen] = useState(false);
  const { userInfo, login } = useUser();
  const handleSummon = () => {
    if (!userInfo) return login();
    Dialog.show({
      content: '是否确认消耗xxx积分召唤',
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
    <div className={styles.page}>
      <div className={styles.bottom}>
        <div className={styles.btn} onClick={handleSummon}></div>
        <UserPoints />
        <Mask open={open} afterClose={() => setOpen(false)}>
          <Prize id={101} />
        </Mask>
      </div>
    </div>
  );
};

export default Exchange;
