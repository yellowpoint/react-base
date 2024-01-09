import html2canvas from 'html2canvas';
import React, { useRef, useEffect, useState } from 'react';

import styles from './index.module.less';

import img_1 from '@/assets/img/card/1.jpg';
import { Mask } from '@/components';

const PosterComponent = ({ img, show, ...rest }) => {
  const posterRef = useRef(null);
  const imageContainerRef = useRef(null);

  const generatePoster = async () => {
    if (!posterRef.current) return;

    try {
      const canvas = await html2canvas(posterRef.current);
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

  return (
    <Mask open={show} afterShow={generatePoster} {...rest}>
      <div className={styles.posterBox} ref={imageContainerRef}>
        <div ref={posterRef} className={styles.poster}>
          <img className={styles.card} src={img_1} alt="星座卡片" />
          <img className={styles.qrCode} src={img_1} alt="二维码" />
        </div>
      </div>
    </Mask>
  );
};

export default PosterComponent;
