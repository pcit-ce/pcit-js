const pcit = require('../../src');

let TOKEN = require('../PCITTest').TOKEN;
let ENTRYPOINT = require('../PCITTest').ENTRYPOINT;

const repo = new pcit.Repo(TOKEN, ENTRYPOINT);

describe('Repo', () => {
  // @ts-ignore
  it('find', async () => {
    let result = await repo.find('pcit-ce', 'pcit');

    console.log(result);
  });
});

describe('Settings', () => {
  it('update', async () => {
    let result = await repo
      .settings()
      .update('pcit-ce/pcit', '', 'build_pushes', 0);

    console.log(result);
  });
});
