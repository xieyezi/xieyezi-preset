// https://prettier.io/docs/en/options.html

module.exports = {
  tabWidth: 2, //缩进长度
  printWidth: 150, //单行长度
  useTabs: false, //使用空格代替tab缩进
  singleQuote: false, // 使用单引号
  semi: true, // 句末使用分号
  bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
  jsxSingleQuote: true, // jsx中使用单引号
  trailingComma: "none", //多行时尽可能打印尾随逗号
  arrowParens: "always", // 单参数箭头函数参数周围使用圆括号-eg: (x) => x
};
