import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesComport from './router'; // 路由组件
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'amfe-flexible';
import './assets/index.css';

// 修改title
const DomTitle = ({ item }) => {
  document.title = item.title;
  return <item.component />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </React.StrictMode>,
);
