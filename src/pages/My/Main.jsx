import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, Toast } from 'antd-mobile';

import { NftCard, Mask } from '@/components';
import { getIsRedpacket } from '@/components/const';

import styles from './index.module.less';

const List = ({ list, redPacketList, setOpen }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.list}>
      <div className={styles.title}>
        <p>
          已收集藏品: <b>{list.length}</b>
        </p>
        {!!redPacketList.length && (
          <span onClick={() => setOpen(true)}>{`查看已获得红包 >`}</span>
        )}
      </div>

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
                  navigate('/detail/' + i.card_id + '?nft_code=' + i.nft_code);
                }}
              >
                <NftCard id={i.card_id} shadow />
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
const RedPacketList = ({ list }) => {
  return (
    <div className={styles.redPacketBox}>
      <Swiper slideSize={list?.length === 1 ? 100 : 60} indicator={() => null}>
        {list.map((i, index) => (
          <Swiper.Item key={index}>
            <div
              className={styles.redPacket}
              onClick={() => {
                const card_id = i.card_id;
                if (getIsRedpacket(card_id)) {
                  // todo 跳转红包
                  return;
                }
                navigate('/detail/' + card_id + '?nft_code=' + i.nft_code);
              }}
            >
              <NftCard id={i.card_id} shadow />
              <div className={styles.getRedPacket}>领取封面</div>
            </div>
          </Swiper.Item>
        ))}
      </Swiper>
    </div>
  );
};
const Main = ({ myData }) => {
  const [open, setOpen] = useState(false);
  const { card_list = [] } = myData;
  const cardList = card_list.filter((item) => !getIsRedpacket(item.card_id));
  const redPacketList = card_list.filter((item) =>
    getIsRedpacket(item.card_id),
  );
  return (
    <div className={styles.main}>
      <List list={cardList} redPacketList={redPacketList} setOpen={setOpen} />
      <Mask open={open} afterClose={() => setOpen(false)}>
        <RedPacketList list={redPacketList} />
      </Mask>
    </div>
  );
};

export default Main;
