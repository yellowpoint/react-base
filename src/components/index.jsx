import { SpinLoading } from 'antd-mobile';

export const PageLoading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <SpinLoading />
    </div>
  );
};

export { default as Mask } from './Mask';
