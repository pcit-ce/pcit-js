import pcit from '../PCITTest';

const system = pcit.system;

describe('system', () => {
  it('getGitHubAppSettingsAddress', async () => {
    let result = await system.getGitHubAppSettingsAddress('pcit-ce');

    console.log(result);
  });
});
