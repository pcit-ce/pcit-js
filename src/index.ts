import Builds from './Builds/index';
import Jobs from './Jobs/index';
import Log from './Log/index';
import Org from './Org/index';
import Repo from './Repo/index';
import System from './System/index';
import User from './User/index';
import Artifacts from './Artifacts/index';

export default class PCIT {
  public builds: Builds;
  public jobs: Jobs;
  public log: Log;
  public repo: Repo;
  public system: System;
  public user: User;
  public org: Org;
  public artifacts: Artifacts;

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
    this.artifacts = new Artifacts(token, entrypoint);
  }
}

export { Builds, Jobs, Log, Repo, System, User, Org, Artifacts, PCIT };
