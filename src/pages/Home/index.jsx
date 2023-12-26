import { Button, Space } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.less';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Space wrap>
      <Button color="primary" onClick={() => navigate('/summon')}>
        立即召唤
      </Button>
      <Button color="primary" onClick={() => navigate('/exchange')}>
        星动兑
      </Button>
      <Button color="primary" onClick={() => navigate('/my')}>
        我的保护力藏品
      </Button>
      <Button color="primary" onClick={() => navigate('/summon?a=1')}>
        会员尊享
      </Button>
    </Space>
  );
};

export default Home;
