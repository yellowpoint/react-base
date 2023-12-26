import { Button, Space, Toast } from 'antd-mobile';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.less';

import { getParam } from '@/utils';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (getParam('login')) {
      Toast.show({
        icon: 'loading',
        content: '未登录，正在为您跳转',
        duration: 0,
        maskClickable: false,
      });
      // 2s 后拉起登录
      setTimeout(() => {}, 2000);
    }
  }, []);

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
