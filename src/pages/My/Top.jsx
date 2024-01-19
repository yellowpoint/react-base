import { useEffect, useRef, useState } from 'react';

import { ProgressCircle, Dialog } from 'antd-mobile';

import API from '@/api';
import { Btn, Mask, Prize } from '@/components';
import { idMap } from '@/components/const';

import styles from './index.module.less';

const Top = ({ myData }) => {
  const [open, setOpen] = useState(false);
  const [showRed, setShowRed] = useState(false);
  const { card_list = [] } = myData;
  const num = card_list?.length || 0;
  // 是否已经合成
  const is_one_key = myData?.is_one_key === 1;
  const limitedNum = num > 12 ? 12 : num;

  // 是否领取龙年红包
  const isGetRed = card_list.find((i) => i.card_id === 202);

  const TopBtn = () => {
    // 已合成，但没领取红包，提示去领取红包
    if (is_one_key) {
      if (isGetRed) {
        return (
          <Btn
            onClick={() => {
              setShowRed(true);
              setOpen(true);
            }}
          >
            领取{idMap[202].name}
          </Btn>
        );
      }
      return <Btn disabled>已合成</Btn>;
    }

    return (
      <Btn disabled={limitedNum < 12} onClick={handleClick}>
        一键合成
      </Btn>
    );
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
            '--size': '100px',
            '--track-width': '12px',
            '--track-color': '#fff',
            '--fill-color': '#3687d1',
          }}
        >
          <div className={styles.tips}>{limitedNum}/12</div>
          <img className={styles.img} src="/imgs/my/progress.png" />
        </ProgressCircle>
      </div>
      <div className={styles.textContainer}>
        <p>抽满12星座就能合成保护力</p>
        <p>解锁第13个隐藏款NFT龙年限定丁丁</p>
        <div>限定前100名合成保护力的用户获得封面红包</div>
      </div>
      <div className={styles.btn}>
        <TopBtn />
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
