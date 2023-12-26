// 页面路由
import { lazy } from 'react';

import NotFound from '@/pages/NotFound';

const lazyLoad = (page) => lazy(() => import(`@/pages/${page}/index.jsx`));

const routerList = [
  {
    path: '/',
    title: '首页',
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
    component: NotFound,
  },
];

export default routerList;
