import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Main from './Main';
import Top from './Top';

import styles from './index.module.less';

const My = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <Top />
      <Main />
    </div>
  );
};

export default My;
