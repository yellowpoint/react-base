// vite-plugin-modify-img-src.js

export default function modifyImgSrcPlugin(isBuild) {
  return {
    name: 'modify-img-src',
    transform(code, id) {
      if (!isBuild && id.endsWith('.jsx')) {
        // 使用正则表达式替换所有的 img src 属性
        code = code.replace(
          /(jsxDEV\("img",\s*\{\s*src:\s*")(.*?)(?="\s*\},)/g,
          (match, p1, p2) => {
            // 这里可以根据需要修改图片路径 p2
            const newSrc = modifyImagePath(p2);
            console.log('newSrc', newSrc);
            return `${p1}${newSrc}`;
          },
        );
      }
      return {
        code,
      };
    },
  };
}

// 在这个函数中修改图片路径
function modifyImagePath(oldSrc) {
  console.log('oldSrc', oldSrc);

  // 在这里实现你的图片路径修改逻辑
  // 例如，你可以将路径从 '/old-path/' 替换为 '/new-path/'
  return oldSrc.replace('/imgs/', '/member-nft-h5/imgs/');
}
