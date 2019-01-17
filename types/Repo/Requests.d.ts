import PCITAbstract from '../PCITAbstract';
export default class Requests extends PCITAbstract {
    list(git_type: string, username: string, repo_name?: string, before?: number, limit?: number): any;
    create(username: string, repo_name: string, message: string, branch: string, config?: string): any;
    get(username: string, repo_name: string, request_id: number): any;
}
