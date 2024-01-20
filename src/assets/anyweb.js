import { Provider } from '@idealight-labs/anyweb-js-sdk';

import API from '@/api';

let providerObj = undefined;
const init = () => {
  return new Promise((resolve) => {
    const provider = new Provider({
      // logger: console, // SDK 的 logger, 设置为 null 可关闭 SDK 的日志
      logger: null, // SDK 的 logger, 设置为 null 可关闭 SDK 的日志
      appId: '38870951-9968-465f-b15d-80b088824705', // todo 上线前更换
    });

    provider.on('ready', () => {
      resolve(provider);
      providerObj = provider;
    });
  });
};

export const cfx_accounts = async () => {
  if (!providerObj) {
    await init();
  }
  providerObj
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
      API.nftAddress({ address: address?.[0] });
    })
    .catch((e) => {
      console.error('调用失败', e);
    });
};

export const anyweb_home = async () => {
  if (!providerObj) {
    await init();
  }

  providerObj
    .request({
      method: 'anyweb_home',
    })
    .then((data) => {})
    .catch((e) => {
      console.error('调用失败', e);
    });
};
