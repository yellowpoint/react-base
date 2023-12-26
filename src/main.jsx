import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'amfe-flexible';
import './assets/index.css';
import RoutesComport from './router'; // 路由组件

import { PageLoading } from '@/components';

// 修改title
const DomTitle = ({ item }) => {
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
