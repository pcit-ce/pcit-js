import { Builds } from './Builds';
import { Jobs } from './Jobs';
import { Log } from './Log';
import { Org } from './Org';
import { Repo } from './Repo';
import { System } from './System';
import { User } from './User';

class PCIT {
  public builds: Builds;
  public jobs: Jobs;
  public log: Log;
  public repo: Repo;
  public system: System;
  public user: User;
  public org: Org;

  constructor(
    token: string = '',
    entrypoint: string = 'https://ci.khs1994.com/api',
  ) {
    if (entrypoint === '') {
      entrypoint = '/api';
    }

    this.builds = new Builds(token, entrypoint);
    this.jobs = new Jobs(token, entrypoint);
    this.log = new Log(token, entrypoint);
    this.repo = new Repo(token, entrypoint);
    this.system = new System(token, entrypoint);
    this.user = new User(token, entrypoint);
    this.org = new Org(token, entrypoint);
  }
}

export { Builds, Jobs, Log, Repo, System, User, Org, PCIT };

export default PCIT;
