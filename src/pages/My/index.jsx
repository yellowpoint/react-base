import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import API from '@/api';
import { getHasLong } from '@/components/const';

import Main from './Main';
import Top from './Top';

import styles from './index.module.less';

const My = () => {
  const navigate = useNavigate();

  const [myData, setMyData] = useState([]);
  const hasLong = getHasLong(myData);
  useEffect(() => {
    const init = async () => {
      const data = await API.collectDetail();
      setMyData(data);
    };
    init();
  }, []);
  return (
    <div className={styles.page}>
      <Top num={myData.length} hasLong={hasLong} />
      <Main myData={myData} />
    </div>
  );
};

export default My;
