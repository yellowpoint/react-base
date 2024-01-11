import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper } from 'antd-mobile';

import { useUser } from '@/components/UserContext';

import styles from './index.module.less';

const BoxSwiper = () => {
  const ref = useRef(null);
  return (
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

      <Swiper ref={ref} indicator={() => null} loop>
        <Swiper.Item key={1}>
          <div className={styles.box}></div>
        </Swiper.Item>
        <Swiper.Item key={2}>
          <div className={styles.box}></div>
        </Swiper.Item>
        <Swiper.Item key={3}>
          <div className={styles.box}></div>
        </Swiper.Item>
      </Swiper>
    </div>
  );
};
export default BoxSwiper;
