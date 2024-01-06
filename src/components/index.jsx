import { SpinLoading } from 'antd-mobile';

import { cookie } from '@/utils';

export const PageLoading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <SpinLoading></SpinLoading>
    </div>
  );
};

export const getIsLogin = () => !cookie.getItem('token');