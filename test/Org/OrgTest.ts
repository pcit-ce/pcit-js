import pcit from '../PCITTest';

describe('org', () => {
  it('list', async () => {
    let result = await pcit.org.list();

    console.log(result);
  });
});
