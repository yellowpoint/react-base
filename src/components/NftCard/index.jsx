import styles from './index.module.less';

const NftCard = ({ index }) => {
  return (
    <div className={styles.cardBox}>
      <div className={styles.main}>
        <img src={`/cards/${index + 1}.jpg`} />
      </div>
    </div>
  );
};

export default NftCard;
