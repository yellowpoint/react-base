import React, { useEffect, useState } from 'react';

import { Mask as AntdMask } from 'antd-mobile';

import styles from './index.module.less';

const Mask = ({ open = false, children, ...rest }) => {
  const [visible, setVisible] = useState(open);
  const handleClose = () => setVisible(false);
  useEffect(() => {
    setVisible(open);
  }, [open]);
  return (
    <AntdMask visible={visible} destroyOnClose {...rest}>
      <div className={styles.mask}>
        <div className={styles.close} onClick={handleClose}></div>
        <div className={styles.content}>{children}</div>
      </div>
    </AntdMask>
  );
};

export default Mask;
