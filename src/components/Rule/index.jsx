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
            <h1>如何召唤丁丁12星座NFT</h1>
            <p>满足等级条件的相应会员</p>
            <p>可获取相关召唤丁丁12星座NFT数字藏品权益</p>

            <table>
              <thead>
                <tr>
                  <th>会员等级</th>
                  <th>免费召唤丁丁12星座NFT（次数）</th>
                  <th>召唤丁丁12星座NFT（积分）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>白金卡会员</td>
                  <td>1</td>
                  <td>30积分/次</td>
                </tr>
                <tr>
                  <td>金卡会员</td>
                  <td>2</td>
                  <td>20积分/次</td>
                </tr>
                <tr>
                  <td>黑金卡会员</td>
                  <td>3</td>
                  <td>10积分/次</td>
                </tr>
                <tr>
                  <td>星耀卡/星新卡会员</td>
                  <td>3</td>
                  <td>10积分/次</td>
                </tr>
              </tbody>
            </table>
            <a
              href="http://"
              target="_blank"
              rel="noreferrer"
            >{`查看会员等级成长说明>>>>`}</a>
            <h1>如何获取丁丁龙年隐藏款</h1>
            <p>可通过两种方式获取丁丁龙年隐藏款</p>
            <p>
              <b>方式①：</b>
            </p>
            <p>
              可在立即召唤页面，点击直抽隐藏款，进入相应页面后，使用399积分，即可直接获得丁丁龙年隐藏款。
            </p>
            <p>
              <b>方式②：</b>
            </p>
            <p>当收集的NFT藏品集齐丁丁12星座时，即可解锁丁丁龙年隐藏款。</p>
            <h1>如何获取丁丁龙年微信红包封面</h1>
            <p>丁丁龙年微信红包封面一共有2款</p>
            <p>可通过以下方式获取</p>
            <p>丁丁龙年微信红包封面 款式一：可点击立即召唤即有机会获得。</p>
            <p>
              丁丁龙年微信红包封面
              款式二：当收集的NFT藏品集齐丁丁12星座时，即能解锁微信红包封面（限量100个），数量有限，领完即止。
            </p>
            <h1>关于结束藏品之旅</h1>
            <p>
              当收集的NFT藏品：集齐丁丁12星座、丁丁龙年隐藏款，和龙年红包封面款式一，该活动自动结束。
            </p>
            <footer>最终解释权归合生元Mama100</footer>
          </div>
        </div>
      </Mask>
    </>
  );
};

export default Rule;
