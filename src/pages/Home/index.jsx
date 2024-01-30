import { useNavigate } from 'react-router-dom';

import TopBtns from '@/components/TopBtns';

import styles from './index.module.less';

const Home = () => {
  const navigate = useNavigate();
  console.log('import.meta.env.BASE_URL', import.meta.env.BASE_URL);
  return (
    <div className={styles.page}>
      <TopBtns />
      <img
        className={styles.title}
        src={`${import.meta.env.BASE_URL}imgs/home/title.gif`}
        alt="标题"
      />
      <img
        className={styles.icon1}
        src={`${import.meta.env.BASE_URL}imgs/home/icon1.png`}
      />
      <img
        className={styles.icon2}
        src={`${import.meta.env.BASE_URL}imgs/home/icon2.png`}
      />
      <div className={styles.dingBox}>
        <img
          className={styles.ding}
          src={`${import.meta.env.BASE_URL}imgs/home/dingding.png`}
          alt="丁丁"
        />
        <img
          className={styles.carpet}
          src={`${import.meta.env.BASE_URL}imgs/home/carpet.gif`}
          alt="飞毯"
        />
      </div>
      <div className={styles.disc}>
        <img src={`${import.meta.env.BASE_URL}imgs/home/disc.png`} />
        <img src={`${import.meta.env.BASE_URL}imgs/home/disc_shadow.png`} />
      </div>
      <img
        className={styles.light}
        src={`${import.meta.env.BASE_URL}imgs/home/light.png`}
      />
      <div className={styles.bottom}>
        <div
          className={styles.toMember}
          onClick={() => navigate('/summon?fromMember=true')}
        >
          <img src={`${import.meta.env.BASE_URL}imgs/home/member.png`} />
        </div>
      </div>
    </div>
  );
};

export default Home;
