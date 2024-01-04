import { useNavigate } from 'react-router-dom';

import styles from './index.module.less';

import img_box from '@/assets/summon/box.png';

const Summon = () => {
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
      <div className={styles.main}>
        <div className={styles.box}>
          <img src={img_box} alt="box" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div>立即召唤</div>
        <div>消耗168积分</div>
        <div>
          当前剩余积分：2000 <span>如何获取积分</span>
        </div>
      </div>
    </div>
  );
};

export default Summon;
