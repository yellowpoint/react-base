import { Swiper, Toast } from 'antd-mobile';

import { NftCard } from '@/components';

import styles from './index.module.less';

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className={styles.card}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`);
      }}
    >
      <NftCard index={2} />
    </div>
  </Swiper.Item>
));
const Main = () => {
  return (
    <div className={styles.main}>
      <p>已收集 4</p>
      <div className={styles.cards}>
        <Swiper slideSize={60} trackOffset={20} indicator={() => null}>
          {items}
        </Swiper>
      </div>
    </div>
  );
};

export default Main;
