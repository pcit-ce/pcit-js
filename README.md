# PCIT JS SDK

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
