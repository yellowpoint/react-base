export const getAuthUrl = () => {
  const isPro = location.host === 'www.mama100.com'; // todo 可否用域名来判断开发环境？

  const isDev = location.host === 'localhost:8888';
  const mock = location.origin + '/mock';

  // 默认为测试环境
  let authEndpoint =
    'https://weixin.mama100.cn/mama100-wechat/auth2/mama100wechat/unSilence/auth2';

  // 生产环境
  if (isPro) {
    authEndpoint =
      'https://www.mama100.com/mama100-wechat/auth2/mama100wechat/unSilence/auth2';
  }

  if (isDev) authEndpoint = mock;
  // 回调地址，在cookie塞入token、customerld、unionld、openld，限定域名mama100.com
  const redirectUrl = encodeURIComponent(window.location.href);
  // 1表示要求绑定了微信(注册会员)，如果没有绑定会去注册界面，0:不要求
  const bindingRequired = 1;

  const authUrl = `${authEndpoint}?bindingRequired=${bindingRequired}&redirectUrl=${redirectUrl}`;
  return authUrl;
};
