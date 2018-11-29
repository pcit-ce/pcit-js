const ENTRYPOINT: string = 'https://ci2.khs1994.com:10000/api';
const TOKEN: string | undefined = 'xxx';

import PCIT from '../src/index';

const pcit = new PCIT(TOKEN, ENTRYPOINT);

pcit.builds.find(100).then(res => console.log(res));

// deno ./DenoTest.ts --allow-net
