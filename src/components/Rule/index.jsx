import { useState } from 'react';

import { memberLevelUrl } from '@/components/const';
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
          <div className={styles.title}>活动规则</div>

          <img src={`${import.meta.env.BASE_URL}imgs/home/rule.png`} />
          <div className={styles.ruleMain}>
            <h1>如何召唤丁丁12星座NFT</h1>
            <p>满足等级条件的相应会员</p>
            <p>可获取相关召唤丁丁12星座NFT数字藏品</p>

            <table>
              <thead>
                <tr>
                  <th>会员等级</th>
                  <th>免费召唤丁丁12星座NFT</th>
                  <th>
                    积分召唤丁丁12星座NFT
                    <br />
                    <span className={styles.tableSmall}>
                      (当免费次数使用完毕后再次召唤收集)
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>金卡会员</td>
                  <td>1次</td>
                  <td>30积分/次</td>
                </tr>
                <tr>
                  <td>白金卡会员</td>
                  <td>2次</td>
                  <td>20积分/次</td>
                </tr>
                <tr>
                  <td>黑金卡会员</td>
                  <td>3次</td>
                  <td>10积分/次</td>
                </tr>
                <tr>
                  <td>
                    星耀卡/
                    <br />
                    星新卡会员
                  </td>
                  <td>3次</td>
                  <td>10积分/次</td>
                </tr>
              </tbody>
            </table>
            <a
              href={memberLevelUrl}
              target="_blank"
              rel="noreferrer"
            >{`查看会员等级成长说明>>>>`}</a>
            <h1>如何获取丁丁龙年隐藏款</h1>
            <p>可通过两种方式获取丁丁龙年隐藏款</p>
            <p>
              <b>方式①：</b>
            </p>
            <p>
              可在【立即召唤】页面，点击【直抽隐藏款】，进入相应页面后，使用399积分，即可直接获得丁丁龙年隐藏款。
            </p>
            <p>
              <b>方式②：</b>
            </p>
            <p>集齐丁丁12星座NFT藏品，即可解锁丁丁龙年隐藏款。</p>
            <h1>关于结束藏品之旅</h1>
            <p>集齐丁丁12星座、丁丁龙年隐藏款，活动自动结束。</p>
            <footer>最终解释权归合生元Mama100</footer>
          </div>
        </div>
      </Mask>
    </>
  );
};

export default Rule;
