import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import API from '@/api';
import { memberLevelUrl } from '@/components/const';
import TopBtns from '@/components/TopBtns';
import { useUser } from '@/components/UserContext';
import { getParam } from '@/utils';

import BoxSwiper from './BoxSwiper';
import List from './List';
import SummonBtn from './SummonBtn';
import { SummonProvider, useSummonContext } from './SummonContext';

import styles from './index.module.less';

const MemberInfo = ({ isMember, userInfo, summonData, fromMember }) => {
  if (!userInfo) return null;

  // 会员不管是否来自会员入口，都显示
  if (isMember || summonData.free_times > 0) {
    // 2到6有图片
    const isLevelInRange = userInfo && userInfo.level > 1 && userInfo.level < 7;
    return (
      <div className={styles.member}>
        <div className={styles.memberLevel}>
          {isLevelInRange ? (
            <img
              src={`${import.meta.env.BASE_URL}imgs/summon/member/${
                userInfo.level
              }.png`}
              alt="会员"
            />
          ) : (
            userInfo.level_name || '默认会员'
          )}
        </div>
        <div className={styles.memberFree}>
          剩余：<span>{summonData.free_times}</span>次免费次数
        </div>
      </div>
    );
  }
  // 非会员且来自会员入口则提示
  if (!isMember && fromMember) {
    return (
      <div className={styles.sorry}>
        抱歉，您的等级尚未达标，
        <br />
        <a
          href={memberLevelUrl}
          target="_blank"
          rel="noreferrer"
        >{`点击查看如何升级>>`}</a>
      </div>
    );
  }
};

const SummonCom = () => {
  const navigate = useNavigate();
  const { userInfo, login } = useUser();
  const { summonData, setSummonData } = useSummonContext();
  const fromMember = getParam('fromMember');
  const isMember = userInfo?.level > 1;
  const disabled = !isMember && fromMember;
  // 能买隐藏款，是会员且没有隐藏款
  const canBy = isMember && summonData?.have_dragon_card !== 1;
  useEffect(() => {
    if (!userInfo) return;
    if (disabled) {
      return setSummonData({ disabled });
    }
    const init = async () => {
      const data = await API.summonIndex();
      setSummonData(data);
    };
    init();
  }, [userInfo]);

  return (
    <div className={styles.page}>
      <div className={styles.boxTable}>
        <img
          className={styles.table}
          src={`${import.meta.env.BASE_URL}imgs/summon/table.png`}
        />
        <img
          className={styles.light}
          src={`${import.meta.env.BASE_URL}imgs/summon/light.png`}
        />
      </div>
      <TopBtns black />
      <BoxSwiper />
      <MemberInfo
        fromMember={fromMember}
        userInfo={userInfo}
        isMember={isMember}
        summonData={summonData}
      />
      <List />
      {canBy && (
        <div className={styles.exchange} onClick={() => navigate('/exchange')}>
          {`直抽隐藏款>>`}
        </div>
      )}

      <SummonBtn />
    </div>
  );
};

const Summon = () => {
  return (
    <SummonProvider>
      <SummonCom />
    </SummonProvider>
  );
};
export default Summon;
