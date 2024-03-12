import React, { createContext, useContext, useState, useEffect } from 'react';

import { Toast } from 'antd-mobile';
import Cookies from 'js-cookie';

import API from '@/api';
import { COOKIE_KEY } from '@/components/const';

// 创建上下文
const UserContext = createContext();
const login = () => {
  location.href = API.getAuthUrl();
};
export const reLogin = () => {
  try {
    const openid = Cookies.getJSON(COOKIE_KEY)?.openid || Cookies.get('openId');
    if (openid) API.updateCookies({ openId: openid });
  } catch (error) {}

  Cookies.remove(COOKIE_KEY);
  Cookies.remove('token');
  Cookies.remove('openId');
  login();
};

// 提供者组件
export const UserProvider = ({ children }) => {
  const defaultUser = Cookies.getJSON(COOKIE_KEY);
  const [userInfo, setUserInfo] = useState(defaultUser);
  const [isReady, setIsReady] = useState(false);
  const setUser = (newUserInfo) => {
    setUserInfo(newUserInfo);
  };

  const getUserInfo = async (openid = userInfo?.openid) => {
    const data = await API.memberInfo({ openid });
    const newData = { ...data, openid };

    Cookies.set(COOKIE_KEY, newData, { expires: 30 });
    setUser(newData);
    setIsReady(true);
  };
  const init = async () => {
    // 不需要登录信息的情况
    if (!defaultUser && !Cookies.get('token')) {
      setIsReady(true);
    }
    // 没有该项目的用户信息，且有mama100的token时调用内部登录
    if (!defaultUser && Cookies.get('token')) {
      const openid = Cookies.get('openId');
      if (!openid) {
        Toast.show({
          icon: 'loading',
          content: '未获取到openid，正在为您重新登录',
          afterClose: () => {
            reLogin();
          },
        });
        return;
      }
      await API.sessionSave({
        openid,
        token: Cookies.get('token'),
        customer_id: Cookies.get('customerId'),
        union_id: Cookies.get('unionId'),
      });
      getUserInfo(openid);
    }
    // 有登录则更新数据
    if (defaultUser?.openid) {
      getUserInfo(defaultUser.openid);
    }
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <UserContext.Provider
      value={{ userInfo, setUser, login, updateUserInfo: getUserInfo }}
    >
      {isReady && children}
    </UserContext.Provider>
  );
};

// 使用者自定义 hook
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser 必须在 UserProvider 内使用');
  }
  return context;
};
