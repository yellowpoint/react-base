import { Provider } from '@idealight-labs/anyweb-js-sdk';

const init = () => {
  return new Promise((resolve) => {
    const provider = new Provider({
      // logger: console, // SDK 的 logger, 设置为 null 可关闭 SDK 的日志
      logger: null, // SDK 的 logger, 设置为 null 可关闭 SDK 的日志
      appId: '38870951-9968-465f-b15d-80b088824705',
    });

    provider.on('ready', () => {
      console.log('Provider ready', Provider.ready);
      resolve(provider);
    });
  });
};

export const cfx_accounts = async () => {
  const provider = await init();

  provider
    .request({
      method: 'cfx_accounts',
      params: [
        {
          availableNetwork: [1, 1029],
          scopes: ['baseInfo'],
        },
      ],
    })
    .then((data) => {
      const { chainId, networkId, address, code } = data;
      console.log('DApp 获取到的授权结果', chainId, networkId, address, code);
      // todo 调用自己的接口上传地址
    })
    .catch((e) => {
      console.error('调用失败', e);
    });
};

export const anyweb_home = async () => {
  const provider = await init();

  provider
    .request({
      method: 'anyweb_home',
      params: [
        {
          availableNetwork: [1, 1029],
          scopes: ['baseInfo'],
        },
      ],
    })
    .then((data) => {
      const { chainId, networkId, address, code } = data;
      console.log('DApp 获取到的授权结果', chainId, networkId, address, code);
    })
    .catch((e) => {
      console.error('调用失败', e);
    });
};
// anyweb_home();
// cfx_accounts();
