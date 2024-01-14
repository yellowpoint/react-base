import React, { useEffect } from 'react';

const MockAuth = () => {
  // 获取 URL 中的 redirectUrl 参数
  const urlParams = new URLSearchParams(window.location.search);
  const redirectUrl = urlParams.get('redirectUrl');
  // 添加点击事件监听器
  const handleRedirectClick = () => {
    // 模拟获取 token（可以根据实际情况进行修改）
    const token = 'your_token_value';

    // 设置 token 到 Cookie
    document.cookie = `token=${token}; path=/;`;

    if (redirectUrl) {
      window.location.href = redirectUrl;
    } else {
      console.error('Missing redirectUrl parameter in the URL');
    }
  };
  return (
    <div>
      <button onClick={handleRedirectClick}>模拟登录</button>
    </div>
  );
};

export default MockAuth;
