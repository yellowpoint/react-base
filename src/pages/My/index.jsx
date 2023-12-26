import { Button, Space } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

// import styles from './index.module.less';

const My = () => {
  console.log('My');

  const navigate = useNavigate();
  return <Space wrap>My</Space>;
};

export default My;
