import { useNavigate } from 'react-router-dom';

import TopBtns from '@/components/TopBtns';

import styles from './index.module.less';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <TopBtns />

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
