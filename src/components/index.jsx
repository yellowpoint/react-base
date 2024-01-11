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

export const Btn = ({ children, className, ...rest }) => {
  return (
    <div className={styles.btn} {...rest}>
      {children}
    </div>
  );
};

export { default as Mask } from './Mask';
