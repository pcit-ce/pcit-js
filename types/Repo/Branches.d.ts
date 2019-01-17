import PCITAbstract from '../PCITAbstract';
export default class Branches extends PCITAbstract {
    list(git_type: string, username: string, repo_name?: string): any;
    find(git_type: string, username: string, repo_name: string, branch_name: string): any;
}
