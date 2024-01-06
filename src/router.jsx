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
    title: 'my',
    component: lazyLoad('My'),
  },
  {
    path: '/summon',
    title: 'Summon',
    notNeedLogin: true,
    component: lazyLoad('Summon'),
  },
  {
    path: '/collection',
    title: 'Collection',
    component: lazyLoad('Collection'),
  },
  {
    path: '/exchange',
    title: 'Exchange',
    component: lazyLoad('Exchange'),
  },
  // {
  //   path: "/",
  //   component : <Layout />,
  //   children: [
  //     {
  //       path: "/",
  //       component : <Home />,
  //     },
  //   ],
  // },
  {
    path: '*',
    title: '404',
    notNeedLogin: true,
    component: lazyLoad('NotFound'),
  },
];

export default routerList;
