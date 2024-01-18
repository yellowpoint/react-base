import { useEffect, useRef, useState } from 'react';

import { ProgressCircle, Dialog } from 'antd-mobile';

import API from '@/api';
import { Btn, Mask, Prize } from '@/components';

import styles from './index.module.less';

const Top = ({ num = 0, hasLong }) => {
  const [open, setOpen] = useState(false);
  const [showRed, setShowRed] = useState(false);
  const limitedNum = num > 12 ? 12 : num;

  const getBtnText = () => {
    // todo 需要接口返回是否已经合成，抽到龙卡无法判断
    if (hasLong) return '已合成';
    return '一键合成';
  };
  const handleClick = () => {
    Dialog.show({
      content: `是否确认合成?`,
      closeOnAction: true,
      actions: [
        [
          {
            key: 'cancel',
            text: '取消',
          },
          {
            key: 'ok',
            text: '确认',
            danger: true,
          },
        ],
      ],
      onAction: async (action) => {
        if (action.key !== 'ok') return;
        await API.one_key();
        setOpen(true);
      },
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        <ProgressCircle
          percent={(limitedNum / 12) * 100}
          style={{
            '--size': '80px',
            '--track-width': '16px',
            '--track-color': '#fff',
            '--fill-color': '#3383e3',
          }}
        >
          <span className={styles.tips}>{limitedNum}/12</span>
        </ProgressCircle>
      </div>
      <div className={styles.textContainer}>
        <p>抽满12星座就能合成保护力</p>
        <p>解锁第13个隐藏款NFT龙年限定丁丁</p>
        <div>限定前100名合成保护力的用户获得封面红包</div>
      </div>
      <div className={styles.btn}>
        <Btn disabled={num < 12 || hasLong} onClick={handleClick}>
          {getBtnText()}
        </Btn>
      </div>
      <Mask open={open} afterClose={() => setOpen(false)}>
        {!showRed ? (
          <Prize id={101}>
            <Btn
              onClick={() => {
                setShowRed(true);
              }}
              fill
            >
              解锁龙年丁丁红包封面
            </Btn>
          </Prize>
        ) : (
          <Prize id={202} />
        )}
      </Mask>
    </div>
  );
};
export default Top;
