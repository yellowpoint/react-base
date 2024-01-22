import React, { useEffect } from 'react';

import { Button } from 'antd-mobile';
import Cookies from 'js-cookie';

const MockAuth = () => {
  // 获取 URL 中的 redirectUrl 参数
  const urlParams = new URLSearchParams(window.location.search);
  const redirectUrl = urlParams.get('redirectUrl');
  // 添加点击事件监听器
  const handleRedirectClick = () => {
    Cookies.set('hhId', '1080669374');
    Cookies.set('token', '8a3e8f0d5450a6e52c3b9d0bc7b21094');
    Cookies.set('customerId', '80669374');
    Cookies.set('unionId', 'oZyc1uLjhxoP2m-jt-vtjAAje3X0');
    Cookies.set('openId', 'o-3qn0aotYbf05zXXC82pLM2bYBk');

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
