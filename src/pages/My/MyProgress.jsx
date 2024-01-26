import { useState, useEffect } from 'react';

import progressStyles from './progress.module.less';

import styles from './index.module.less';

const MyProgress = ({ limitedNum }) => {
  const [progressClass, setProgressClass] = useState(0);
  useEffect(() => {
    let currentNum = 0;
    const interval = setInterval(() => {
      // 检查是否达到限制数
      if (currentNum < limitedNum) {
        // 增加进度后缀数字
        currentNum = currentNum + 1;
        setProgressClass(currentNum);
      } else {
        clearInterval(interval); // 达到限制数，清除计时器
      }
    }, 300);

    return () => clearInterval(interval); // 在组件卸载时清除计时器
  }, [limitedNum]);
  return (
    <div className={styles.norem_progressBar}>
      {/* 使用clip-path实现进度环效果 */}
      <div
        className={`${styles.progress100Box} ${
          progressStyles['clip' + progressClass]
        }`}
      >
        <img
          className={`${styles.progress100}`}
          src="/imgs/my/progress100.png"
        />
      </div>
      <img className={styles.progress0} src="/imgs/my/progress0_2.png" />
      <div className={styles.tips}>{limitedNum}/12</div>
      <img className={styles.icon} src="/imgs/my/progress.png" />
    </div>
  );
};

export default MyProgress;
