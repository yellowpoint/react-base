import { useNavigate } from 'react-router-dom';

import styles from './index.module.less';

const Home = () => {
  const navigate = useNavigate();
  return <div className={styles.page}>首页</div>;
};

export default Home;
