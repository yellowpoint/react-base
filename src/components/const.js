export const idMap = {
  0: { name: '白羊座' },
  1: { name: '金牛座' },
  2: { name: '双子座' },
  3: { name: '巨蟹座' },
  4: { name: '狮子座' },
  5: { name: '处女座' },
  6: { name: '天秤座' },
  7: { name: '天蝎座' },
  8: { name: '射手座' },
  9: { name: '摩羯座' },
  10: { name: '水瓶座' },
  11: { name: '双鱼座' },
  101: { name: '隐藏款龙年限定NFT丁丁' },
  201: { name: '限定红包封面', url: '1111' },
  202: { name: '隐藏款龙年限定红包封面', url: '2222' },
};

export const nameList = [
  '白羊座',
  '金牛座',
  '双子座',
  '巨蟹座',
  '狮子座',
  '处女座',
  '天秤座',
  '天蝎座',
  '射手座',
  '摩羯座',
  '水瓶座',
  '双鱼座',
  '隐藏款',
];
export const getIsRedpacket = (id) => [201, 202].includes(id);
