import React, { useEffect } from 'react';

import { Button } from 'antd-mobile';
import Cookies from 'js-cookie';

const MockAuth = () => {
  // 获取 URL 中的 redirectUrl 参数
  const urlParams = new URLSearchParams(window.location.search);
  const redirectUrl = urlParams.get('redirectUrl');
  // 添加点击事件监听器
  const handleRedirectClick = () => {
    Cookies.set('hhId', '1088896517');
    Cookies.set('token', 'ae8ef7c6ba6fff24c6129d8df3cb26c6');
    Cookies.set('customerId', '80669374');
    Cookies.set('unionId', 'oyF4kw4b2nda6itIYFgqpCH1Kti4');
    Cookies.set('openId', 'osFJ4jk4lMIiwna6bGLf1rZyKL9w');

    if (redirectUrl) {
      window.location.href = redirectUrl;
    } else {
      console.error('Missing redirectUrl parameter in the URL');
    }
  };
  return (
    <div>
      <Button color="primary" fill="solid" onClick={handleRedirectClick}>
        模拟登录
      </Button>
    </div>
  );
};

export default MockAuth;
