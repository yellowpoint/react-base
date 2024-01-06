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
    <div className={styles.page}>
      <div className={styles.top}>
        <div className={styles.toMy} onClick={() => navigate('/my')}>
          我的藏品
        </div>
        <div className={styles.toRule} onClick={() => navigate('/my')}>
          规则&gt;&gt;
        </div>
      </div>

      <div className={styles.bottom}>
        <div
          className={styles.toSummon}
          onClick={() => navigate('/summon')}
        ></div>
      </div>
    </div>
  );
};

export default Home;
