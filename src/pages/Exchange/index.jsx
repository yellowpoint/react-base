import { useState } from 'react';

import { Dialog } from 'antd-mobile';

import API from '@/api';
import { NftCard, Mask, Prize } from '@/components';
import { memberLevelUrl } from '@/components/const';
import { useUser } from '@/components/UserContext';

import styles from './index.module.less';

const UserPoints = () => {
  const { userInfo } = useUser();
  if (!userInfo) return null;
  return (
    <>
      <div className={styles.expend}>消耗{userInfo.direct_cost_score}积分</div>
      <div className={styles.surplus}>
        当前剩余积分：{userInfo.score}
        <a
          href={memberLevelUrl}
          target="_blank"
          rel="noreferrer"
        >{`如何获取积分`}</a>
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
      content: `是否确认消耗${userInfo.direct_cost_score}积分召唤`,
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
        await API.score();
        setOpen(true);
      },
    });
  };
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <NftCard id={101} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.btn} onClick={handleSummon}></div>
        <UserPoints />
        <Mask open={open} noClose afterClose={() => setOpen(false)}>
          <Prize id={101} />
        </Mask>
      </div>
    </div>
  );
};

export default Exchange;
