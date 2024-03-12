import React, { useEffect, useState } from 'react';

import { Mask as AntdMask } from 'antd-mobile';

import styles from './index.module.less';

const Mask = ({ open = false, children, noClose, ...rest }) => {
  const [visible, setVisible] = useState(open);
  const handleClose = () => setVisible(false);
  useEffect(() => {
    setVisible(open);
  }, [open]);
  return (
    <AntdMask
      visible={visible}
      destroyOnClose
      {...rest}
      color="rgba(2,10,36,0.7)"
    >
      <div className={styles.mask}>
        {!noClose && <div className={styles.close} onClick={handleClose}></div>}
        <div className={styles.content}>{children}</div>
      </div>
    </AntdMask>
  );
};

export default Mask;
