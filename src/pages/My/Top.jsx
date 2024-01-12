import { ProgressCircle } from 'antd-mobile';

import { Btn } from '@/components';

import styles from './index.module.less';

const Top = () => {
  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        <ProgressCircle
          percent={50}
          style={{
            '--size': '80px',
            '--track-width': '16px',
            '--track-color': '#fff',
            '--fill-color': '#3383e3',
          }}
        >
          <span className={styles.tips}>6/12</span>
        </ProgressCircle>
      </div>
      <div className={styles.textContainer}>
        <p>抽满12星座就能合成保护力</p>
        <p>解锁第13个隐藏款NFT龙年限定丁丁</p>
        <div>限定前100名合成保护力的用户获得封面红包</div>
      </div>
      <div className={styles.btn}>
        <Btn>一键合成</Btn>
      </div>
    </div>
  );
};
export default Top;
