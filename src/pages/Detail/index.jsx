import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Space } from 'antd-mobile';

import API from '@/api';
import { cfx_accounts } from '@/assets/anyweb.js';
import { idMap, getIsRedpacket, getCardName } from '@/components/const';
import { getParam } from '@/utils';

import styles from './index.module.less';

const Detail = () => {
  const { id } = useParams();
  const nft_code = getParam('nft_code');

  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      const data = await API.collectCardDetail({ nft_code });
      // setMyData(data);
    };
    init();
  }, []);
  return (
    <div className={styles.page}>
      <div className={styles.imgBox}>
        <div className={styles.img}>
          <img src={`/imgs/cards/${id}.jpg`} />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.btns}>
          <div
            onClick={() => {
              cfx_accounts();
            }}
          >
            <img src="/imgs/detail/icon1.png" />
            转移资产
          </div>

          <div>
            <img src="/imgs/detail/icon2.png" />
            更新元数据
          </div>
          <div>
            <img src="/imgs/detail/icon3.png" />
            链上存证
          </div>
        </div>
        <div className={styles.text}>
          <h1>十二星座藏品-{getCardName(id)}</h1>
          <div className={styles.row}>
            <p>编号:</p>
            <p>{id}</p>
          </div>
          <div className={styles.row}>
            <span>描述:</span>
            <p>
              这枚徽章是 一
              个象征着奔跑的图案，上面一只小鸟在飞翔，它代表着勇敢。提醒我们，要勇敢追求梦想，不断前行，不要放弃，要坚持到
              最后。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
