import { TOKEN, ENTRYPOINT } from '../PCITTest';

import { Jobs } from '../../src/Jobs';

const jobs = new Jobs(TOKEN, ENTRYPOINT);

describe('jobs', () => {
  // @ts-ignore
  it('find', async () => {
    let result = await jobs.find(575);
    console.log(result);
  });
});
