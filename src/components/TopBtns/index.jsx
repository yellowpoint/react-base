import { useNavigate } from 'react-router-dom';

import Rule from '@/components/Rule';
import { useUser } from '@/components/UserContext';

import styles from './index.module.less';

const TopBtns = ({ black = false }) => {
  const navigate = useNavigate();

  const { userInfo, login } = useUser();

  return (
    <div className={`${styles.top} ${black ? styles.black : ''}`}>
      <div
        className={styles.toMy}
        onClick={() => {
          if (userInfo) {
            return navigate('/my');
          }
          login();
        }}
      >
        我的藏品
      </div>

      <Rule />
    </div>
  );
};
export default TopBtns;
