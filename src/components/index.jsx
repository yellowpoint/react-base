import { Spin } from 'antd';

import styles from './index.module.less';

export const PageLoading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Spin />
    </div>
  );
};
