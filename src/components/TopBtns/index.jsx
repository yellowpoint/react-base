import { useNavigate } from 'react-router-dom';

import styles from './index.module.less';

import Rule from '@/components/Rule';
import { useUser } from '@/components/UserContext';

const TopBtns = ({ black = false }) => {
  const navigate = useNavigate();

  const { userInfo } = useUser();

  return (
    <div className={`${styles.top} ${black ? styles.black : ''}`}>
      {!!userInfo && (
        <div className={styles.toMy} onClick={() => navigate('/collection')}>
          我的藏品
        </div>
      )}
      <Rule />
    </div>
  );
};
export default TopBtns;
