import pcit = require('../../src');

import { TOKEN, ENTRYPOINT } from '../PCITTest';

const repo = new pcit.Repo(TOKEN, ENTRYPOINT);

const builds = new pcit.Builds(TOKEN, ENTRYPOINT);

describe('builds', () => {
  // @ts-ignore
  it('find', async () => {
    let result = await builds.find(100);

    console.log(result);
  });

  it('current', async () => {
    try {
      let result = await builds.current('github', 'pcit-ce/pcit2');
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  });
});
