import styles from './index.module.less';

const NftCard = ({ id }) => {
  return (
    <div className={styles.cardBox}>
      <div className={styles.main}>
        <img src={`/imgs/cards/${id}.jpg`} />
      </div>
    </div>
  );
};

export default NftCard;
