export const COOKIE_KEY = 'userInfo_nft_2024'; // 防止和其他页面搞混

export const idMap = {
  0: { name: '白羊座', tips: '这是一个直率乐观的星座' },
  1: { name: '金牛座', tips: '这是一个理财高手的星座' },
  2: { name: '双子座', tips: '这是一个C位出道的星座' },
  3: { name: '巨蟹座', tips: '这是一个纯爱战神的星座' },
  4: { name: '狮子座', tips: '这是一个霸气侧漏的星座' },
  5: { name: '处女座', tips: '这是一个追求完美的星座' },
  6: { name: '天秤座', tips: '这是一个颜值担当的星座' },
  7: { name: '天蝎座', tips: '这是一个最强大脑的星座' },
  8: { name: '射手座', tips: '这是一个气氛担当的星座' },
  9: { name: '摩羯座', tips: '这是一个浪漫匠人的星座' },
  10: { name: '水瓶座', tips: '这是一个天马行空的星座' },
  11: { name: '双鱼座', tips: '这是一个善解人意的星座' },
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

// 是否是红包封面
export const getIsRedpacket = (id) => [201, 202].includes(id);
// 是否已经有龙卡了
export const getHasLong = (list) => list.find((i) => [101].includes(i.card_id));

export const getCardName = (id) => idMap[id]?.name;

// 会员等级介绍页面
export const memberLevelUrl =
  'https://www.mama100.com/wmall/activityDemo/shoppingGuideNew/index.html?_campaign=20240120222950_24824';
