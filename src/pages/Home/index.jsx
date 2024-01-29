import { useNavigate } from 'react-router-dom';

import TopBtns from '@/components/TopBtns';

import styles from './index.module.less';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <TopBtns />
      <img className={styles.title} src="/imgs/home/title.gif" alt="标题" />
      <img className={styles.icon1} src="/imgs/home/icon1.png" />
      <img className={styles.icon2} src="/imgs/home/icon2.png" />
      <div className={styles.dingBox}>
        <img className={styles.ding} src="/imgs/home/dingding.png" alt="丁丁" />
        <img className={styles.carpet} src="/imgs/home/carpet.gif" alt="飞毯" />
      </div>
      <div className={styles.disc}>
        <img src="/imgs/home/disc.png" />
        <img src="/imgs/home/disc_shadow.png" />
      </div>
      <img className={styles.light} src="/imgs/home/light.png" />
      <div className={styles.bottom}>
        <div
          className={styles.toMember}
          onClick={() => navigate('/summon?fromMember=true')}
        ></div>
        {/* <div
          className={styles.toSummon}
          onClick={() => navigate('/summon')}
        ></div> */}
      </div>
    </div>
  );
};

export default Home;
