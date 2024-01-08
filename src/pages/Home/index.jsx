import { useNavigate } from 'react-router-dom';

import styles from './index.module.less';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <div className={styles.toMy} onClick={() => navigate('/my')}>
          我的藏品
        </div>
        <div className={styles.toRule} onClick={() => navigate('/my')}>
          规则&gt;&gt;
        </div>
      </div>

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
