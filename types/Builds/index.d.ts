import PCITAbstract from '../PCITAbstract';
export default class Builds extends PCITAbstract {
    list(before?: number, limit?: number): any;
    findByRepo(git_type: string, username: string, repo_name?: string, pr_only?: boolean, before?: number, limit?: number): any;
    current(git_type: string, username: string, repo_name?: string): any;
    find(build_id: number): any;
    cancel(build_id: number): any;
    restart(build_id: number): any;
}
