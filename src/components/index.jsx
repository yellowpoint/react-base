import { SpinLoading } from 'antd-mobile';

import styles from './index.module.less';

export const PageLoading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <SpinLoading />
    </div>
  );
};

export const Btn = ({ children, className, fill, ...rest }) => {
  return (
    <div className={`${styles.btn} ${fill && styles.fill}`} {...rest}>
      <div className={styles.btnEle}>
        <div className={styles.btnText}>{children}</div>
      </div>
    </div>
  );
};

export { default as Mask } from './Mask';
export { default as NftCard } from './NftCard';
export { default as Prize } from './Prize';
