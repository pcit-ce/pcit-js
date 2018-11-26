# PCIT JS SDK

[![npm](https://img.shields.io/npm/v/@pcit/pcit-js.svg)](https://www.npmjs.com/package/@pcit/pcit-js)

* https://github.com/pcit-ce/pcit-js

## Usage

```bash
$ npm i --save @pcit/pcit-js
```

```js
const pcit = require('@pcit/pcit-js');

const TOKEN = 'xxx';

const repo = pcit.Repo(TOKEN, 'https://ci.domain.com/api');

(async ()=>{
  let result = await repo.find('pcit-ce', 'pcit');

  console.log(result);
})()
```

## dev

### PCIT 开发环境

```bash
$ npm run dev-build
```

### PCIT 小程序开发环境

```bash
$ npm run dev-miniprogram
```
