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
    title: '我的星座保护力',
    component: lazyLoad('My'),
  },
  {
    path: '/summon',
    title: '十二星座限量数字藏品',
    notNeedLogin: true,
    component: lazyLoad('Summon'),
  },
  {
    path: '/collection',
    title: '我的藏品',
    component: lazyLoad('Collection'),
  },
  {
    path: '/exchange',
    title: '会员尊享',
    component: lazyLoad('Exchange'),
  },
  {
    path: '*',
    title: '404',
    notNeedLogin: true,
    component: lazyLoad('NotFound'),
  },
];

export default routerList;
