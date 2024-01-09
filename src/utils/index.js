// localStorage
export const storage = {
  get: (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  set: (key, value) => {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
};
// 校验身份证
export const isIDCard = (value) =>
  /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/.test(
    value,
  );
// 校验手机号
export const isPhoneNumber = (value) => /^1\d{10}$/.test(value);
export const getParam = (key) => {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
};
