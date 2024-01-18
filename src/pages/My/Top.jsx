import { useEffect, useRef, useState } from 'react';

import { ProgressCircle } from 'antd-mobile';

import { Btn, Mask, Prize } from '@/components';

import styles from './index.module.less';

const Top = ({ num = 11 }) => {
  const [open, setOpen] = useState(false);
  const [showRed, setShowRed] = useState(false);
  const limitedNum = num > 12 ? 12 : num;

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
        <Btn
          disabled={num < 12}
          onClick={() => {
            console.log('一键合成');
            setOpen(true);
          }}
        >
          {/* 需判断是否已经合成,判断是否有龙卡 ，提示已有隐藏款*/}
          一键合成
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
