import { useNavigate } from 'react-router-dom';

import styles from './index.module.less';

const Home = () => {
  const navigate = useNavigate();
  return <div className="w-100 h-200 bg-yellow-500 text-sm p-10 mx-auto md:bg-red-500 rounded-[10px]" >首页</div>;
};

export default Home;
