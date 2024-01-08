import React, { createContext, useContext, useState, useEffect } from 'react';

import { getAuthUrl } from '@/api';
import { cookie } from '@/utils';

const COOKIE_KEY = 'userInfo_nft_2024'; // 防止和其他页面搞混

// 创建上下文
const UserContext = createContext();

// 提供者组件
export const UserProvider = ({ children }) => {
  const defaultUser = cookie.getItem(COOKIE_KEY);
  const [userInfo, setUserInfo] = useState(defaultUser);

  const setUser = (newUserInfo) => {
    setUserInfo(newUserInfo);
  };

  // 登录
  const login = () => {
    location.href = getAuthUrl();
  };

  // 登出
  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    // 没有该项目的用户信息，且有mama100的token
    if (!defaultUser && cookie.getItem('token')) {
      alert('调用自己的登录接口');
      const userInfo = { points: 1000 };

      cookie.setItem(COOKIE_KEY, cookie, 30 * 24 * 60 * 60);
      setUser(userInfo);
    }
  }, []);
  return (
    <UserContext.Provider value={{ userInfo, setUser, login, logout }}>
      {children}
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
