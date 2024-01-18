import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, Toast } from 'antd-mobile';

import { NftCard } from '@/components';

import styles from './index.module.less';

const Main = () => {
  const [List, setList] = useState([
    '#ace0ff',
    '#bcffbd',
    '#e4fabd',
    '#ffcfac',
  ]);

  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      <p>已收集 4</p>
      <div className={styles.cards}>
        <Swiper slideSize={60} trackOffset={20} indicator={() => null}>
          {List.map((i, index) => (
            <Swiper.Item key={index}>
              <div
                className={styles.card}
                onClick={() => {
                  navigate('/detail/' + (+index + 1));
                }}
              >
                <NftCard id={2} />
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Main;
