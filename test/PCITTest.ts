const ENTRYPOINT: string =
  process.env.NODE_PCIT_ENTRYPOINT || 'https://ci2.khs1994.com:10000/api';
const TOKEN: string | undefined = process.env.NODE_PCIT_TOKEN;

import PCIT from '../';

const pcit = new PCIT(TOKEN, ENTRYPOINT);

export default pcit;
