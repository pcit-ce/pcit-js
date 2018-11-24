import pcit = require('../../src');

import { TOKEN, ENTRYPOINT } from '../PCITTest';

const system = new pcit.System(TOKEN, ENTRYPOINT);

describe('system', () => {
  it('getGitHubAppSettingsAddress', async () => {
    let result = await system.getGitHubAppSettingsAddress('pcit-ce');

    console.log(result);
  });
});
