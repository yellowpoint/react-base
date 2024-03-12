import { useState, useEffect } from 'react';

import styles from './index.module.less';

const ProgressCircle = ({ percent = 0 }) => {
  const [percent_, setPercent_] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPercent_(percent);
    }, 500);
  }, [percent]);
  return (
    <div
      className={styles['norem-progress-circle']}
      style={{ '--percent': percent_ }}
    >
      <svg>
        <circle
          stroke="var(--inactive-color)"
          style={{
            strokeDasharray: `calc(3.1415 * var(--r) * var(--active-degree) / 180),
                                calc(3.1415 * var(--r) * var(--gap-degree) / 180)`,
          }}
        />
        <circle
          stroke="var(--color)"
          className={styles['progress-value']}
          style={{
            strokeDasharray: `calc(3.1415 * var(--r) * var(--percent) * var(--active-degree) / 180 / 100), 1000`,
          }}
        />
      </svg>
    </div>
  );
};

export default ProgressCircle;
