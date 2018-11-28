import pcit from '../PCITTest';

const repo = pcit.repo;

describe('Repo', () => {
  // @ts-ignore
  it('find', async () => {
    let result = await repo.find('github', 'pcit-ce', 'pcit');

    console.log(result);
  });
});

describe('Settings', () => {
  it('update', async () => {
    let result = await repo.settings.update(
      'pcit-ce/pcit',
      '',
      'build_pushes',
      0,
    );

    console.log(result);
  });
});
