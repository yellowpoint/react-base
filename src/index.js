import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesComport from './router'; // 路由组件
import { BrowserRouter, useRoutes } from 'react-router-dom';
import 'lib-flexible';
import './index.css';

const GetRoutes = () => useRoutes(RoutesComport);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GetRoutes />
    </BrowserRouter>
  </React.StrictMode>,
);
