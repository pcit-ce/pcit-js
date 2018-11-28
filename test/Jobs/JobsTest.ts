import pcit from '../PCITTest';

const jobs = pcit.jobs;

describe('jobs', () => {
  // @ts-ignore
  it('find', async () => {
    let result = await jobs.find(575);
    console.log(result);
  });
});
