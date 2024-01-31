import { useEffect, useRef, useState } from 'react';

import { Dialog, Toast } from 'antd-mobile';

import API from '@/api';
import { Btn, Mask, Prize } from '@/components';
import { idMap, getOnly12Card } from '@/components/const';

import MyProgress from './MyProgress';

import styles from './index.module.less';

const Top = ({ myData, init }) => {
  const [open, setOpen] = useState(false);
  const [showRed, setShowRed] = useState(false);

  const [oneKeyData, setOneKeyData] = useState({});
  const [redPacketData, setRedPacketData] = useState({});
  const { card_list = [] } = myData;
  // 是否已经合成
  const is_one_key = myData?.is_one_key === 1;
  const only12Card = getOnly12Card(card_list);
  const num = only12Card?.length || 0;
  const limitedNum = num > 12 ? 12 : num;

  // 是否领取龙年红包
  const isGetRed = card_list.find((i) => i.card_id === 202);

  const getRedPacket202 = async () => {
    const data = await API.red_packet({ card_id: 202 });
    setRedPacketData(data);
    setShowRed(true);
    setOpen(true);
    init();
  };
  const TopBtn = () => {
    // 没数据先不显示
    if (myData?.is_one_key === undefined) return null;

    // 已合成，但没领取红包，提示去领取红包
    if (is_one_key) {
      if (!isGetRed) {
        return <Btn onClick={getRedPacket202}>领取{idMap[202].name}</Btn>;
      }
      return <Btn>已合成</Btn>;
    }

    return <Btn onClick={handleClick}>{`一 键 合 成`}</Btn>;
  };
  const handleClick = () => {
    if (limitedNum < 12) {
      Toast.show({
        position: 'top',
        content: '集齐12张才能合成哦~',
      });
      return;
    }
    window?._hmt?.push?.(['_trackEvent', '点击立即合成', 'click']);
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
        const data = await API.one_key();
        setOneKeyData(data);
        setOpen(true);
        init();
      },
    });
  };
  const handleTest = () => {
    setOneKeyData({ nft_code: 321321321 });
    setOpen(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.progressBox}>
        <MyProgress limitedNum={limitedNum} />
      </div>

      <div className={styles.btn}>
        <TopBtn />
        <p>前500名还可额外获得龙年限定丁丁红包封面</p>
      </div>

      {/* <button
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
        onClick={() => handleTest()}
      >
        测试合成
      </button> */}

      <Mask open={open} afterClose={() => setOpen(false)}>
        {!showRed ? (
          <Prize id={101} item={oneKeyData}>
            <Btn className={styles.redBtn} onClick={getRedPacket202} fill>
              解锁龙年丁丁红包封面
            </Btn>
          </Prize>
        ) : (
          <Prize id={202} item={redPacketData} />
        )}
      </Mask>
    </div>
  );
};
export default Top;
