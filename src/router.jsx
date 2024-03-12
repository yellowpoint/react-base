// 页面路由
import { lazy } from 'react';

const lazyLoad = (page) => lazy(() => import(`@/pages/${page}/index.jsx`));

const routerList = [
  {
    path: '/',
    title: '首页',
    notNeedLogin: true,
    component: lazyLoad('Home'),
  },
  {
    path: '/my',
    title: '我的保护力藏品',
    component: lazyLoad('My'),
  },
  {
    path: '*',
    title: '404',
    notNeedLogin: true,
    component: lazyLoad('NotFound'),
  },
];

export default routerList;
