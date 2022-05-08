
<h1 align="center">commit-config-preset <sup>xieyezi</sup></h1>

<p align="center">
<a href="https://www.npmjs.com/package/@xieyezi/commit-config-preset" target="__blank"><img src="https://api.iconify.design/simple-icons:git.svg?color=%23878787" height="32" alt="commit-config-preset" /></a>
</p>

<p align="center">commit 规则<br>
</p>

## 使用方式

```bash
yarn add @xieyezi/commit-config-preset -D
pnpm add @xieyezi/commit-config-preset -D
```

### .cz-config.js

```js
const xieyeziConfig = require("@xieyezi/commit-config-preset");
module.exports = {
  ...xieyeziConfig,
  // 你的其他配置
};
```
