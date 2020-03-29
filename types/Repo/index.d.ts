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
    get branches(): Branches;
    get caches(): Caches;
    get crons(): Crons;
    get env(): Env;
    get issues(): Issues;
    get requests(): Requests;
    get settings(): Settings;
    get star(): Star;
    get status(): Status;
}
