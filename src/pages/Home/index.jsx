import { Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.less';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.home} onClick={() => navigate('/home')}>
      <Button>home</Button>
    </div>
  );
};

export default Home;
