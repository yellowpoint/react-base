import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import API from '@/api';
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
  if (isMember) {
    return (
      <div className={styles.member}>
        <div className={styles.memberLevel}>
          {userInfo.level_name || '默认会员'}
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
        <span>{`点击查看如何升级>>`}</span>
      </div>
    );
  }
};
const SummonCom = () => {
  const navigate = useNavigate();
  const { userInfo, login } = useUser();
  const { summonData, setSummonData } = useSummonContext();
  const fromMember = getParam('fromMember');
  const isMember = userInfo?.level > 0;
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
        <img className={styles.table} src="/imgs/summon/table.png" />
      </div>
      <TopBtns black />
      <BoxSwiper />
      <div className={styles.tips}>这是一个充满魅力的星座</div>
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
