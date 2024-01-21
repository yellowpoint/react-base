import React, { useRef, useEffect, useState } from 'react';

import { Toast } from 'antd-mobile';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode.react';

import { NftCard } from '@/components';

import styles from './index.module.less';

const PosterComponent = ({ id }) => {
  const posterRef = useRef(null);
  const imageContainerRef = useRef(null);
  const generatePoster = async () => {
    if (!posterRef.current) return;

    try {
      Toast.show({
        icon: 'loading',
        content: '海报生成中....',
        duration: 0,
        maskClickable: false,
      });
      const canvas = await html2canvas(posterRef.current, {
        backgroundColor: null,
        scale: 2,
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
      Toast.clear();
    } catch (error) {
      console.error('Error creating poster image:', error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      generatePoster();
    }, 0);
  }, []);
  return (
    <div className={styles.posterBox} ref={imageContainerRef}>
      <div ref={posterRef} className={styles.poster}>
        <div className={styles.posterImg}>
          <img src={`/imgs/cards/${id}.jpg`} alt="卡片" />
        </div>
        <div className={`${styles.qrCode}`}>
          <p>
            扫码查看详情
            <br />
            加人丁丁12星座藏品之旅
          </p>
          <div className={styles.img}>
            <QRCode
              value={location.href.replace('/summon', '/')} // 生成二维码的内容，活动首页
              size={300} // 二维码的大小
              fgColor="#000000" // 二维码的颜色
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterComponent;
