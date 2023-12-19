// 页面路由
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const routerList = [
  {
    path: '/',
    title: '首页',
    component: Home,
  },
  {
    path: '/home',
    title: 'home',
    component: Home,
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
