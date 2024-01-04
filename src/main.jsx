import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './assets/flexible.js';
import './assets/index.css';
import RoutesComport from './router'; // 路由组件

import { PageLoading, getIsLogin } from '@/components';

// 修改title
const DomTitle = ({ item }) => {
  const isLogin = getIsLogin();
  // 在鉴权检查后手动导航
  if (!isLogin && !item.notNeedLogin) {
    return <Navigate to="/?login=true" replace />;
  }
  document.title = item.title;
  return <item.component />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
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
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
