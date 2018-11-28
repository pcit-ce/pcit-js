import pcit from '../PCITTest';

const user = pcit.user;

describe('User', function() {
  this.timeout(0);

  it.skip('getToken', async () => {
    let result = await user.getToken('github', 'khs1994', '');

    console.log(result);
  });
});
