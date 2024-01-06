import { useNavigate } from 'react-router-dom';

import styles from './index.module.less';

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
        <div className={styles.arrowLeft}></div>
        <div className={styles.box}></div>
        <div className={styles.arrowRight}></div>
      </div>
      <div className={styles.tips}>这是一个充满魅力的星座</div>
      <div className={styles.list}>娃娃列表</div>
      <div className={styles.bottom}>
        <div className={styles.btn}></div>
        <div className={styles.expend}>消耗168积分</div>
        <div className={styles.surplus}>
          当前剩余积分：2000 <span>如何获取积分</span>
        </div>
      </div>
    </div>
  );
};

export default Summon;
