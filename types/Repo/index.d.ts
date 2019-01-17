import PCITAbstract from '../PCITAbstract';
import Branches from './Branches';
import Caches from './Caches';
import Crons from './Crons';
import Env from './Env';
import Issues from './Issues';
import Requests from './Requests';
import Settings from './Settings';
import Star from './Star';
import Status from './Status';
export default class Repo extends PCITAbstract {
    list(): any;
    listByOwner(git_type: string, username: string): any;
    find(git_type: string, username: string, repo_name?: string): any;
    active(username: string, repo_name: string): any;
    deactivate(username: string, repo_name: string): any;
    readonly branches: Branches;
    readonly caches: Caches;
    readonly crons: Crons;
    readonly env: Env;
    readonly issues: Issues;
    readonly requests: Requests;
    readonly settings: Settings;
    readonly star: Star;
    readonly status: Status;
}
