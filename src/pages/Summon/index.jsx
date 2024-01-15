import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TopBtns from '@/components/TopBtns';
import { useUser } from '@/components/UserContext';

import BoxSwiper from './BoxSwiper';
import List from './List';
import SummonBtn from './SummonBtn';

import styles from './index.module.less';

const Summon = () => {
  const navigate = useNavigate();
  const { userInfo, login } = useUser();

  return (
    <div className={styles.page}>
      <TopBtns black />
      <BoxSwiper />
      <div className={styles.tips}>这是一个充满魅力的星座</div>
      <List />
      <button onClick={() => navigate('/exchange')}>直接兑换</button>
      <SummonBtn />
    </div>
  );
};

export default Summon;
