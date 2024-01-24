import ProgressCircle from '@/components/ProgressCircle';

// import { ProgressCircle } from 'antd-mobile';
import styles from './index.module.less';

const MyProgress = ({ limitedNum }) => {
  return (
    <div className={styles.norem_progressBar}>
      <img className={styles.progress0} src="/imgs/my/progress0.png" />
      <div className={styles.progressCircle}>
        <ProgressCircle percent={(limitedNum / 12) * 100} />
      </div>
      <div className={styles.tips}>{limitedNum}/12</div>
      <img className={styles.icon} src="/imgs/my/progress.png" />
      {/* <ProgressCircle
    percent={(limitedNum / 12) * 100}
    style={{
      '--size': '80px',
      '--track-width': '12px',
      '--track-color': 'transparent',
      '--fill-color': '#3687d1',
      // 3687d1
      // transparent
    }}
  >
  </ProgressCircle> */}
      {/* <img
    className={styles.progress100}
    src="/imgs/my/progress100.png"
  /> */}
    </div>
  );
};

export default MyProgress;
