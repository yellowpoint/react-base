import { Button, Space } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

import { cfx_accounts } from '@/assets/anyweb.js';
// import styles from './index.module.less';

const Collection = () => {
  const navigate = useNavigate();
  return (
    <Space wrap>
      <Button
        onClick={() => {
          cfx_accounts();
        }}
      >
        转移资产
      </Button>
      <Button>更新元数据</Button>
      <Button>链上存证</Button>
    </Space>
  );
};

export default Collection;
