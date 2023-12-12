// 导入页面组件
import Home from "./pages/Home";
import NotFound from './pages/Home/NotFound';
const routerList = [
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/",
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Home />,
  //     },
  //   ],
  // },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routerList;
