import { useState } from 'react';

import { nameList, idMap } from '@/components/const';
import Mask from '@/components/Mask';

import Cards from './Cards';

import styles from './index.module.less';

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
              <img src={`/imgs/dolls/${index}.png`} alt={nameList[index]} />
              <p>{idMap[index]?.date || ''}</p>
              <p>{nameList[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default List;
