import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.home} onClick={() => navigate('/home')}>
      home
    </div>
  );
};

export default Home;
