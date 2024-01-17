import { useNavigate } from 'react-router-dom';

import TopBtns from '@/components/TopBtns';

import styles from './index.module.less';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <TopBtns />
      <img className={styles.title} src="/imgs/home/title.png" alt="标题" />
      <img className={styles.ding} src="/imgs/home/dingding.png" alt="丁丁" />
      <div className={styles.bottom}>
        <div
          className={styles.toMember}
          onClick={() => navigate('/summon')}
        ></div>
        <div
          className={styles.toSummon}
          onClick={() => navigate('/summon')}
        ></div>
      </div>
    </div>
  );
};

export default Home;
