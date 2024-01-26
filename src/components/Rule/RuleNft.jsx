import { useState } from 'react';

import Mask from '@/components/Mask';

import styles from './index.module.less';

const RuleNft = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {children}
      </div>
      <Mask
        open={isOpen}
        afterClose={() => {
          setIsOpen(false);
        }}
      >
        <div className={styles.ruleBox}>
          <div className={styles.title}>NFT说明</div>

          <img className={styles.bg} src="/imgs/home/rule.png" />
          <div className={styles.ruleMain}>
            <h1>NFT数字藏品链接说明</h1>
            <p>{`NFT("非同质化代币"的简称)是您拥有的数字商品。`}</p>
            <p>所有权证证明在区块链上,而区块链是一个可公开访问的数字数据库。</p>
            <p>
              要将NFT展示到【我的藏品】中,则需要先连接你的
              AnyWeb加密货币钱包,并验证你的地址。
            </p>
            <h1>关于AnyWeb加密货币钱包说明</h1>
            <p>请登录官方网站，根据提示注册，创建个人账户。</p>
            <p> 用户根据官方提示查看和管理自己在不同平台上所持有的数字资产。</p>
            {/* <footer>最终解释权归合生元Mama100</footer> */}
          </div>
        </div>
      </Mask>
    </>
  );
};

export default RuleNft;
