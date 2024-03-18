import { useNavigate } from 'react-router-dom';

import { Button } from 'antd';

import styles from './index.module.less';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto h-200 w-100 rounded-[10px] bg-yellow-500 p-10 text-sm md:bg-red-500">
      首页
      <Button type="primary">按钮</Button>
    </div>
  );
};

export default Home;
