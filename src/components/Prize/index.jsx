import { useNavigate } from 'react-router-dom';

import { NftCard, Btn } from '@/components';
import { idMap, getIsRedpacket, getCardName } from '@/components/const';

import Poster from './Poster';

import styles from './index.module.less';

// 抽卡入口的卡片有分享，红包无分享
// 兑换入口的龙卡无分享

const Title = ({ id }) => {
  if (id > 20) {
    return (
      <>
        <h1>恭喜获得</h1>
        <h2>{getCardName(id)}</h2>
      </>
    );
  }
  return <h1>恭喜获得{getCardName(id) || '默认星座'}</h1>;
};
const Main = ({ isShare, id, nftCode }) => {
  const isRedpacket = getIsRedpacket(id);

  if (isShare && !isRedpacket) {
    return (
      <>
        <Poster id={id} nftCode={nftCode} />
        <div className={styles.share}>
          长按上方保存图片
          <br />
          快和您的好友分享吧!
        </div>
      </>
    );
  }

  return <NftCard id={id} nftCode={nftCode} />;
};
const Animation = () => {
  return (
    <div className={styles.animation}>
      <img className={styles.bg} src="/imgs/prize/bg.png" />
      <img className={styles.light} src="/imgs/prize/light.png" />
      <div>
        <img className={styles.star} src="/imgs/prize/star.png" alt="星星" />
        <img className={styles.star} src="/imgs/prize/star.png" alt="星星" />
        <img className={styles.star} src="/imgs/prize/star.png" alt="星星" />
        <img className={styles.star} src="/imgs/prize/star.png" alt="星星" />
      </div>
    </div>
  );
};
const Prize = ({ isShare, id, isMerge, children, nftCode }) => {
  const navigate = useNavigate();
  const isRedpacket = getIsRedpacket(id);

  return (
    <div className={styles.prize}>
      <Animation />
      <div className={styles.main}>
        <Title id={id} />

        <Main isShare={isShare} id={id} nftCode={nftCode} />

        {isRedpacket && (
          <Btn
            className={styles.btn}
            onClick={() => {
              console.log('红包封面地址：', idMap[id]?.url);
            }}
            fill
          >
            解锁红包封面
          </Btn>
        )}
        {isMerge && (
          <Btn className={styles.btn} onClick={() => {}} fill>
            解锁龙年丁丁红包封面
          </Btn>
        )}
        {children}
        <Btn className={styles.btn} onClick={() => navigate('/my')} fill>
          我的保护力藏品
        </Btn>
      </div>
    </div>
  );
};

export default Prize;
