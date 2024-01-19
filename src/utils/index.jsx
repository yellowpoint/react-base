import { useState, useEffect } from 'react';

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

export const VconsoleCom = ({ children, times = 4 }) => {
  const [clickCount, setClickCount] = useState(0);
  const loadVconsole = () => {
    import('vconsole').then((vconsole) => {
      try {
        new vconsole.default();
      } catch (error) {
        console.log('vconsole', error);
      }
    });
  };
  useEffect(() => {
    // 点击一定次数加载 VConsole
    if (clickCount === times) {
      loadVconsole();
    }
  }, [clickCount, times]);

  const handleClick = () => {
    // 每次点击将点击次数递增
    setClickCount((prevCount) => prevCount + 1);
  };
  return <div onClick={handleClick}>{children}</div>;
};
