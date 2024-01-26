import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Toast } from 'antd-mobile';

import API from '@/api';
import { cfx_accounts, anyweb_home } from '@/assets/anyweb.js';
import { idMap, getIsRedpacket, getCardName } from '@/components/const';
import RuleNft from '@/components/Rule/RuleNft';
import { useUser } from '@/components/UserContext';
import { getParam } from '@/utils';

import styles from './index.module.less';

const Detail = () => {
  const { id } = useParams();
  const nft_code = getParam('nft_code');
  const { userInfo, login } = useUser();

  const [detailData, setDetailData] = useState({});
  const navigate = useNavigate();
  const { desc, detailName, name } = idMap[id] || {};
  useEffect(() => {
    const init = async () => {
      const data = await API.collectCardDetail({ nft_code });
      setDetailData(data);
    };
    init();
  }, []);

  useEffect(() => {
    // anyweb以iframe在body下，页面返回不会清除，故手动清除
    const handlePageBack = (event) => {
      if (!document.querySelector('#anyweb-iframe-mask')) return;
      // 还改变了body的默认行为和样式，直接刷新页面吧
      location.reload();
    };
    // 监听页面变化
    window.addEventListener('popstate', handlePageBack);
    return () => {
      setTimeout(() => {
        window.removeEventListener('popstate', handlePageBack);
      }, 300);
    };
  }, []);

  const goAnyweb = () => {
    Toast.show({
      icon: 'loading',
      content: '加载中…',
      duration: 5000,
      maskClickable: false,
    });
    if (userInfo?.is_bind_address === 1) {
      return anyweb_home();
    }
    cfx_accounts();
  };
  return (
    <div className={styles.page}>
      <div className={styles.imgBox}>
        <div className={styles.img}>
          <img src={`/imgs/cards/${id}.jpg`} />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.btns}>
          <div>
            <RuleNft>
              <img className={styles.icon} src="/imgs/detail/icon2.png" />
              <span>NFT说明</span>
            </RuleNft>
          </div>
          <div onClick={goAnyweb}>
            <img className={styles.icon} src="/imgs/detail/icon1.png" />
            <span>转移资产</span>
          </div>

          <div onClick={goAnyweb}>
            <img className={styles.icon} src="/imgs/detail/icon3.png" />
            <span>链上存证</span>
          </div>
        </div>
        <div className={styles.text}>
          <h1>丁丁-{detailName || name}</h1>
          <div className={styles.row}>
            <p>编号:</p>
            <p>{nft_code}</p>
          </div>
          <div className={styles.row}>
            <span>描述:</span>
            <p>{desc}</p>
          </div>
          <div className={styles.row}>
            <span>发行方:</span>
            <p>合生元Mama100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
