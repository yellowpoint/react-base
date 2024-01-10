import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.less';
import Poster from './Poster';

import TopBtns from '@/components/TopBtns';
import { useUser } from '@/components/UserContext';

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

const Summon = () => {
  const navigate = useNavigate();
  const { userInfo, login } = useUser();
  const [posterShow, setPosterShow] = useState(false);

  const handleSummon = () => {
    if (!userInfo) return login();
  };
  const handleShare = () => {
    setPosterShow(true);
  };
  return (
    <div className={styles.page}>
      <TopBtns black />
      <div className={styles.main}>
        <div className={styles.arrowLeft}></div>
        <div className={styles.box}></div>
        <div className={styles.arrowRight}></div>
      </div>
      <div className={styles.tips}>这是一个充满魅力的星座</div>
      <div className={styles.list}>娃娃列表</div>
      <Poster show={posterShow} afterClose={() => setPosterShow(false)} />
      <div className={styles.bottom}>
        <button onClick={handleShare}>分享</button>
        <div className={styles.btn} onClick={handleSummon}></div>
        <UserPoints />
      </div>
    </div>
  );
};

export default Summon;
