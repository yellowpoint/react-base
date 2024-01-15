import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TopBtns from '@/components/TopBtns';
import { useUser } from '@/components/UserContext';

import BoxSwiper from './BoxSwiper';
import List from './List';
import Poster from './Poster';
import SummonBtn from './SummonBtn';

import styles from './index.module.less';

const Summon = () => {
  const navigate = useNavigate();
  const { userInfo, login } = useUser();
  const [posterShow, setPosterShow] = useState(false);

  const handleShare = () => {
    setPosterShow(true);
  };
  return (
    <div className={styles.page}>
      <TopBtns black />
      <BoxSwiper />
      <div className={styles.tips}>这是一个充满魅力的星座</div>
      <List />
      <Poster show={posterShow} afterClose={() => setPosterShow(false)} />
      <button onClick={handleShare}>分享</button>
      <button onClick={() => navigate('/exchange')}>直接兑换</button>

      <SummonBtn />
    </div>
  );
};

export default Summon;
