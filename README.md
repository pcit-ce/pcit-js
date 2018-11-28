# PCIT JS SDK

[![npm](https://img.shields.io/npm/v/@pcit/pcit-js.svg)](https://www.npmjs.com/package/@pcit/pcit-js)

* https://github.com/pcit-ce/pcit-js

## Usage

```bash
$ npm i --save @pcit/pcit-js
```

```js
// get module
const pcit = require('@pcit/pcit-js');

const TOKEN = 'xxx';

// get repo instance
const repo = pcit.Repo(TOKEN, 'https://ci.domain.com/api');

// call repo find method
(async ()=>{
  let result = await repo.find('pcit-ce', 'pcit');

  console.log(result);
})()
```

or

```js
// get pcit class
const PCIT = require('@pcit/pcit-js').PCIT;

const TOKEN = 'xxx';

// get pcit instance
const pcit = new PCIT(TOKEN, 'https://ci.domain.com/api');

// get repo instance
const repo = pcit.repo;

// call repo find method
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
