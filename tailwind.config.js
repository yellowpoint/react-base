/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // 默认使用px
    spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
      map[index] = `${index}px`;
      return map;
    }, {}),
    fontSize: ({ theme }) => ({
      ...theme("spacing"),
    }),
    screens: {
      'md': {'max': '768px'},
      // => @media (max-width: 768px) { ... }
    },
    // 不覆盖原始值
    // extend: {
    // },
  },
  plugins: [
    function({ addUtilities }) {
      const fontSm = {
        '.text-sm': {
          fontSize: '24px',
          '@screen md': {
            fontSize: '12px',
          },
        },
      };
      addUtilities(fontSm);
    },
  ],
};
