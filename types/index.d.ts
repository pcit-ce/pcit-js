import Builds from './Builds/index';
import Jobs from './Jobs/index';
import Log from './Log/index';
import Org from './Org/index';
import Repo from './Repo/index';
import System from './System/index';
import User from './User/index';
import Artifacts from './Artifacts/index';
export default class PCIT {
    builds: Builds;
    jobs: Jobs;
    log: Log;
    repo: Repo;
    system: System;
    user: User;
    org: Org;
    artifacts: Artifacts;
    constructor(token?: string, entrypoint?: string);
}
export { Builds, Jobs, Log, Repo, System, User, Org, Artifacts, PCIT };
