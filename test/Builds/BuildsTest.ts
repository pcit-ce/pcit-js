const TOKEN = require('../PCITTest').TOKEN;

const ENTRYPOINT = require('../PCITTest').ENTRYPOINT;

const pcit = require('../../src');

const builds = new pcit.Builds(TOKEN, ENTRYPOINT);

describe('builds', () => {
  // @ts-ignore
  it('find', async () => {
    let result = await builds.find(100);

    console.log(result);
  });
});
