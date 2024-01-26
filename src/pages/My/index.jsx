import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import API from '@/api';
import { getHasLong } from '@/components/const';
import { useUser } from '@/components/UserContext';

import Main from './Main';
import Top from './Top';

import styles from './index.module.less';

const My = () => {
  const navigate = useNavigate();
  const { updateUserInfo } = useUser();
  const [myData, setMyData] = useState([]);
  const init = async (isUpdateUserInfo = true) => {
    const data = await API.collectDetail();
    setMyData(data);
    if (isUpdateUserInfo) {
      // 更新userinfo
      updateUserInfo();
    }
  };
  useEffect(() => {
    init(false);
  }, []);
  return (
    <div className={styles.page}>
      <Top myData={myData} init={init} />
      <Main myData={myData} />
      <div className={styles.bottom}>
        <img src="/imgs/my/bg_bottom.png" />
      </div>
    </div>
  );
};

export default My;
