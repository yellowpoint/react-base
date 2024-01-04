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
      <div className={styles.toMy} onClick={() => navigate('/my')}>
        我的藏品&gt;&gt;
      </div>
      <div className={styles.bottom}>
        <div
          className={styles.toSummon}
          onClick={() => navigate('/summon?a=1')}
        >
          会员尊享
        </div>
        <div className={styles.btns}>
          <div onClick={() => navigate('/summon')}>立即召唤</div>
          <div onClick={() => navigate('/exchange')}>星动兑</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
