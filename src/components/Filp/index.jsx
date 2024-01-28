import { useState } from 'react';

import styles from './index.module.less';

const Filp = ({ back, front }) => {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true);
  }, 500);
  return (
    <div className={`${styles.filp} ${show ? styles.show : ''}`}>
      <div className={styles.back}>{show && back}</div>
      <div className={styles.front}>{front}</div>
    </div>
  );
};

export default Filp;
