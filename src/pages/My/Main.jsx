import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, Toast } from 'antd-mobile';

import { NftCard } from '@/components';
import { getIsRedpacket } from '@/components/const';

import styles from './index.module.less';

const List = ({ list, name }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.list}>
      <p>
        已收集{name} {list.length}
      </p>
      <div className={styles.cards}>
        <Swiper
          slideSize={list?.length === 1 ? 0 : 60}
          trackOffset={20}
          indicator={() => null}
        >
          {list.map((i, index) => (
            <Swiper.Item key={index}>
              <div
                className={styles.card}
                onClick={() => {
                  const card_id = i.card_id;
                  if (getIsRedpacket(card_id)) {
                    // todo 跳转红包
                    return;
                  }
                  navigate('/detail/' + card_id + '?nft_code=' + i.nft_code);
                }}
              >
                <NftCard id={i.card_id} />
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Main = ({ myData }) => {
  const cardList = myData.filter((item) => !getIsRedpacket(item.card_id));
  const redPacketList = myData.filter((item) => getIsRedpacket(item.card_id));
  return (
    <div className={styles.main}>
      <List list={cardList} name="卡片" />
      <List list={redPacketList} name="红包封面" />
    </div>
  );
};

export default Main;
