import { getIsRedpacket } from '@/components/const';

import styles from './index.module.less';

const NftCard = ({ id, shadow }) => {
  const isRedpacket = getIsRedpacket(id);
  if (isRedpacket) {
    return <img src={`/imgs/cards/${id}.jpg`} alt="红包封面" />;
  }
  return (
    <div className={`${styles.cardBox} ${shadow ? styles.shadow : ''}`}>
      <div className={styles.main}>
        <img src={`/imgs/cards/${id}.jpg`} alt="卡片" />
      </div>
    </div>
  );
};

export default NftCard;
