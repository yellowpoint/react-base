import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as API from '@/api';
import TopBtns from '@/components/TopBtns';
import { useUser } from '@/components/UserContext';

import BoxSwiper from './BoxSwiper';
import List from './List';
import SummonBtn from './SummonBtn';

import styles from './index.module.less';

const Summon = () => {
  const navigate = useNavigate();
  const { userInfo, login } = useUser();
  const [summonData, setSummonData] = useState({});
  useEffect(() => {
    if (!userInfo) return;
    const init = async () => {
      const data = await API.summonIndex({
        openid: userInfo.openid,
      });
      setSummonData(data);
    };
    init();
  }, [userInfo]);
  return (
    <div className={styles.page}>
      <TopBtns black />
      <BoxSwiper />
      <div className={styles.tips}>这是一个充满魅力的星座</div>
      <div className={styles.member}>
        <div className={styles.memberLevel}>黑金卡会员{userInfo.level}</div>
        <div className={styles.memberFree}>
          剩余：<span>{summonData.free_times}</span>次免费次数
        </div>
      </div>
      <List />
      <div className={styles.exchange} onClick={() => navigate('/exchange')}>
        {`直抽隐藏款>>`}
      </div>
      <SummonBtn summonData={summonData} setSummonData={setSummonData} />
    </div>
  );
};

export default Summon;
