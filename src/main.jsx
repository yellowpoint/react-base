import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ReactDOM from 'react-dom/client';

import './assets/flexible.js';
import './assets/index.css';

import { PageLoading } from '@/components';
import { UserProvider, useUser } from '@/components/UserContext';
import { urlDebug } from '@/utils';

import { baseHtmlPath } from './env.js';
import RoutesComport from './router'; // 路由组件

// 修改title
const DomTitle = ({ item }) => {
  const { userInfo } = useUser();

  // 在鉴权检查后手动导航
  if (!userInfo && !item.notNeedLogin) {
    return <Navigate to="/" replace />;
  }
  document.title = item.title;
  return <item.component />;
};

urlDebug();

const isDev = import.meta.env.DEV;
const basename = isDev ? '/' : baseHtmlPath;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode在开发时useEffect执行两次
  // <React.StrictMode>
  <BrowserRouter basename={basename}>
    <Suspense fallback={<PageLoading />}>
      <UserProvider>
        <Routes>
          {RoutesComport.map((item, index) => {
            return (
              <Route
                key={`routers${index}`}
                exact
                path={item.path}
                element={<DomTitle item={item} />}
              />
            );
          })}
        </Routes>
      </UserProvider>
    </Suspense>
  </BrowserRouter>,
  // </React.StrictMode>,
);
