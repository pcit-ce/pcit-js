# PCIT JS SDK

[![npm](https://img.shields.io/npm/v/@pcit/pcit-js.svg)](https://www.npmjs.com/package/@pcit/pcit-js)
[![install size](https://packagephobia.now.sh/badge?p=@pcit/pcit-js)](https://packagephobia.now.sh/result?p=@pcit/pcit-js)

- https://github.com/pcit-ce/pcit-js

## Usage

PCIT-JS SDK 支持在浏览器、Node.js、微信小程序端运行。

### Browers

```html
// https://ci.domain.com/demo.html

<script src="https://lib.baomitu.com/js-cookie/2.2.0/js.cookie.min.js"></script>
<script src="https://unpkg.com/@pcit/pcit-js@18.12.0-rc.2/dist/pcit.min.js"></script>

<script>
  // get token from cookie
  // TODO please get git_type from url
  const git_type = 'github';

  const TOKEN = Cookies.get(git_type + '_api_token');

  const pcit = new PCIT(TOKEN, '');

  const pcit_user = pcit.user;

  (async () => {
    const result = await pcit_user.current();
    // TODO
    console.log(result);
  })();
</script>
```

### Node.js

```bash
$ npm i --save @pcit/pcit-js
```

```js
// you can save token to system env NODE_PCIT_TOKEN
const TOKEN = process.env.NODE_PCIT_TOKEN || 'xxx';

// get module
const pcit = require('@pcit/pcit-js');

// get repo instance
const pcit_repo = new pcit.Repo(TOKEN, 'https://ci.domain.com/api');

// call repo find method
(async () => {
  let result = await pcit_repo.find('pcit-ce', 'pcit');

  console.log(result);
})();
```

or

```js
// you can save token to system env NODE_PCIT_TOKEN
const TOKEN = process.env.NODE_PCIT_TOKEN || 'xxx';

// get pcit class
const PCIT = require('@pcit/pcit-js');

// get pcit instance
const pcit = new PCIT(TOKEN, 'https://ci.domain.com/api');

// get repo instance
const pcit_repo = pcit.repo;

// call repo find method
(async () => {
  let result = await pcit_repo.find('pcit-ce', 'pcit');

  console.log(result);
})();
```

### TypeScript

```bash
$ npm i --save @pcit/pcit-js
```

```ts
// you can save token to system env NODE_PCIT_TOKEN
const TOKEN: string = process.env.NODE_PCIT_TOKEN || 'xxx';

import PCIT from '@pcit/pcit-js';

const pcit = new PCIT(TOKEN, 'https://ci.khs1994.com/api');

const pcit_builds = pcit.builds;

(async () => {
  let result = await pcit_builds.find(100);
  console.log(result);
})();
```

## Dev

### PCIT 开发环境

```bash
$ npm run dev:build
```

### PCIT 小程序开发环境

```bash
$ npm run dev:miniprogram
```
