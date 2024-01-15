import { useState } from 'react';

import Mask from '@/components/Mask';

import styles from './index.module.less';

const Rule = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={styles.toRule}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        规则&gt;&gt;
      </div>
      <Mask
        open={isOpen}
        afterClose={() => {
          setIsOpen(false);
        }}
      >
        <div className={styles.ruleBox}>
          <div className={styles.ruleMain}>
            <p>
              <b>发售时间：</b>2023年1月1日 20：00
            </p>
            <p>
              <b>基础规则：</b>
              则抽满12星座就能合成保护力活动规则抽满12星座就能合成保护力
              解锁第13个隐藏款NFT龙年限定丁丁隐藏款NFT龙年限定丁丁隐藏款NFT龙年限定丁丁限定前100名合成保护力的用户获得封面
              <p>1、包3个隐藏款NFT龙年限定丁丁</p>
              <p>2、隐藏款NFT龙年限定丁丁合成保护力的用户获得封面</p>
              <p>3、第13个隐藏款NFT龙年限定丁丁</p>
              <p>3、第13个隐藏款NFT龙年限定丁丁</p>
              <p>3、第13个隐藏款NFT龙年限定丁丁</p>
              <p>3、第13个隐藏款NFT龙年限定丁丁</p>
              <p>3、第13个隐藏款NFT龙年限定丁丁</p>
              <p>3、第13个隐藏款NFT龙年限定丁丁</p>
              <p>3、第13个隐藏款NFT龙年限定丁丁</p>
              <p>3、第13个隐藏款NFT龙年限定丁丁</p>
              <p>3、第13个隐藏款NFT龙年限定丁丁</p>
              <p>3、第13个隐藏款NFT龙年限定丁丁</p>
              <p>3、第13个隐藏款NFT龙年限定丁丁</p>
              <p>3、第13个隐藏款NFT龙年限定丁丁</p>
              <p>3、第13个隐藏款NFT龙年限定丁丁</p>
            </p>
          </div>
        </div>
      </Mask>
    </>
  );
};

export default Rule;
