import pcit from '../PCITTest';

const builds = pcit.builds;

describe('builds', () => {
  it('find', async () => {
    let result = await builds.find(100);

    console.log(result);
  });

  it('find_by_repo', async () => {
    let result = await builds.findByRepo(
      'github',
      'pcit-ce/pcit',
      undefined,
      true,
    );

    console.log(result);
  });

  it('find_by_repo_limit', async () => {
    let result = await builds.findByRepo(
      'github',
      'pcit-ce/pcit',
      undefined,
      true,
      292,
      1,
    );

    console.log(result);
  });

  it('current', async () => {
    try {
      let result = await builds.current('github', 'pcit-ce/pcit');
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  });
});
