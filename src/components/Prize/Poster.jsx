import React, { useRef, useEffect, useState } from 'react';

import html2canvas from 'html2canvas';

import { NftCard } from '@/components';

import styles from './index.module.less';

const PosterComponent = ({ id }) => {
  const posterRef = useRef(null);
  const imageContainerRef = useRef(null);
  const generatePoster = async () => {
    if (!posterRef.current) return;

    try {
      const canvas = await html2canvas(posterRef.current, {
        backgroundColor: null,
      });
      // 获取图像的data URL
      const dataUrl = canvas.toDataURL();
      // 创建一个新的图片元素
      const image = new Image();
      image.src = dataUrl;
      // 将图片放到指定的容器中
      if (imageContainerRef.current) {
        imageContainerRef.current.innerHTML = '';
        imageContainerRef.current.appendChild(image);
      }
    } catch (error) {
      console.error('Error creating poster image:', error);
    }
  };

  useEffect(() => {
    // todo 测试是否会由于动画导致dom还没出现就执行了，还要判断内部星座图片加载完了
    setTimeout(() => {
      generatePoster();
    }, 100);
  }, []);
  return (
    <div className={styles.posterBox} ref={imageContainerRef}>
      <div ref={posterRef} className={styles.poster}>
        <NftCard id={id} />
        <div className={styles.qrCode}>
          <p>
            扫码查看详情
            <br />
            加人丁丁12星座藏品之旅
          </p>
          <img src="/imgs/cards/1.jpg" alt="二维码" />
        </div>
      </div>
    </div>
  );
};

export default PosterComponent;
