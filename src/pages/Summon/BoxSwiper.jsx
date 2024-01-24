import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper } from 'antd-mobile';

import { idMap } from '@/components/const';
import { useUser } from '@/components/UserContext';

import styles from './index.module.less';

const TipsSwiper = ({ index }) => {
  const [id, setId] = useState(-1);

  useEffect(() => {
    // 在 index 变化时更新 id，
    setId((prevId) => (prevId + 1) % 8);
  }, [index]);
  return (
    <div className={styles.tips}>
      {idMap[id]?.tips || '这是一个充满魅力的星座'}
    </div>
  );
};
const BoxSwiper = () => {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  const onIndexChange = (index) => {
    setIndex(index);
  };
  return (
    <>
      <div className={styles.main}>
        <div
          className={styles.arrowLeft}
          onClick={() => {
            ref.current?.swipePrev();
          }}
        ></div>
        <div
          className={styles.arrowRight}
          onClick={() => {
            ref.current?.swipeNext();
          }}
        ></div>

        <Swiper
          ref={ref}
          indicator={() => null}
          loop
          onIndexChange={onIndexChange}
        >
          <Swiper.Item key={1}>
            <div className={styles.box}>
              <img src="/imgs/summon/box1.png" alt="盲盒" />
            </div>
          </Swiper.Item>
          <Swiper.Item key={2}>
            <div className={styles.box}>
              <img src="/imgs/summon/box2.png" alt="盲盒" />
            </div>
          </Swiper.Item>
          <Swiper.Item key={3}>
            <div className={styles.box}>
              <img src="/imgs/summon/box3.png" alt="盲盒" />
            </div>
          </Swiper.Item>
        </Swiper>
      </div>

      <TipsSwiper index={index} />
    </>
  );
};
export default BoxSwiper;
