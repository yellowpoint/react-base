import React, { useEffect, useState } from 'react';

import { Mask as AntdMask } from 'antd-mobile';

import styles from './index.module.less';

const MaskBox = ({ visible, hide }) => {
  console.log('MaskBox', visible);
  const Mask = ({ children, ...rest }) => (
    <AntdMask visible={visible} {...rest}>
      <div className={styles.mask}>
        <div className={styles.close} onClick={hide}></div>
        <div className={styles.content}>{children}</div>
      </div>
    </AntdMask>
  );
  return Mask;
};

const useMask = () => {
  const [visible, setVisible] = useState(false);
  console.log('useMask', visible);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  // afterClose={hide}

  return {
    Mask: MaskBox({ visible, hide }),
    show,
    hide,
  };
};

export default useMask;

// 由于无法有mask的fade效果，先搁置
