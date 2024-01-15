import { useNavigate } from 'react-router-dom';

import img_bg from '@/assets/img/prize/bg.png';
import img_star from '@/assets/img/prize/star.png';
import { NftCard, Btn } from '@/components';

import Poster from './Poster';

import styles from './index.module.less';

const Main = ({ isShare, index }) => {
  if (isShare) {
    return <Poster />;
  }
  return <NftCard index={12} />;
};

const Prize = ({ isShare }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.prize}>
      <div className={styles.animation}>
        <img className={styles.bg} src={img_bg} />
        <div>
          <img className={styles.star} src={img_star} />
          <img className={styles.star} src={img_star} />
          <img className={styles.star} src={img_star} />
          <img className={styles.star} src={img_star} />
        </div>
      </div>
      <div className={styles.main}>
        <h1>恭喜获得</h1>
        <h2>隐藏款龙年限定NFT丁丁</h2>
        <Main isShare={isShare} index={2} />
        <div className={styles.share}>
          长按保存图片
          <br />
          快和你的好友分享吧!
        </div>
        <Btn onClick={() => navigate('/my')} fill>
          我的保护力藏品
        </Btn>
      </div>
    </div>
  );
};

export default Prize;
