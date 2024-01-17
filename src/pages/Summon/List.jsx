import { useState } from 'react';

import Mask from '@/components/Mask';

import Cards from './Cards';

import styles from './index.module.less';

export const nameList = [
  '白羊座',
  '金牛座',
  '双子座',
  '巨蟹座',
  '狮子座',
  '处女座',
  '天秤座',
  '天蝎座',
  '射手座',
  '摩羯座',
  '水瓶座',
  '双鱼座',
];

const List = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  // 点击后滚动到对应卡片位置
  const handleClick = (index) => {
    setCardIndex(index);
    setIsOpen(true);
  };
  return (
    <>
      {/* 卡片弹窗 */}
      <Mask open={isOpen} afterClose={() => setIsOpen(false)}>
        <Cards index={cardIndex} />
      </Mask>
      {/* 玩偶列表 */}
      <div className={styles.list}>
        <div className={styles.imgs}>
          {nameList.map((i, index) => (
            <div
              className={styles.item}
              key={index}
              onClick={() => handleClick(index)}
            >
              <img src={`/imgs/dolls/${index + 1}.png`} alt={nameList[index]} />
              <p>{nameList[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default List;
