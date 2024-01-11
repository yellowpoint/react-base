import { useEffect, useRef, useState } from 'react';

import BScroll from '@better-scroll/core';
import ScrollBar from '@better-scroll/scroll-bar';

import { nameList } from './List';

import styles from './index.module.less';

BScroll.use(ScrollBar);

const Cards = ({ index }) => {
  const ref = useRef(null);
  const horizontal = useRef(null);
  const liRefList = useRef([]);
  function getRef(dom) {
    liRefList.current.push(dom);
  }

  useEffect(() => {
    let bs = new BScroll(ref.current, {
      scrollX: true,
      scrollY: false,
      scrollbar: {
        customElements: [horizontal.current],
        fade: false,
      },
    });
    bs.scrollToElement(liRefList.current[index], 2000);
  }, []);

  return (
    <div className={styles.cards}>
      <p>款式预览</p>
      <div className={styles.cardList} ref={ref}>
        <div className={styles.cardImgs}>
          {nameList.map((i, index) => (
            <div className={styles.cardItem} key={index} ref={getRef}>
              <div className={styles.cardBox}>
                <img src={`/cards/${index + 1}.jpg`} alt={nameList[index]} />
              </div>
              <div>{nameList[index]}</div>
            </div>
          ))}
        </div>
        {/* 横向滚动条 */}
        <div className={styles.scrollbar} ref={horizontal}>
          <div className={styles.indicator}></div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
