import { useNavigate } from 'react-router-dom';

import styles from './index.module.less';

import TopBtns from '@/components/TopBtns';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <TopBtns />

      <div className={styles.bottom}>
        <div
          className={styles.toSummon}
          onClick={() => navigate('/summon')}
        ></div>
      </div>
    </div>
  );
};

export default Home;
