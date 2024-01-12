import { Dialog } from 'antd-mobile';

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
  const { userInfo, login } = useUser();
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
      },
    });
  };
  return (
    <div className={styles.page}>
      <div className={styles.bottom}>
        <div className={styles.btn} onClick={handleSummon}></div>
        <UserPoints />
      </div>
    </div>
  );
};

export default Exchange;
