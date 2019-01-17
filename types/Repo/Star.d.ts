import PCITAbstract from '../PCITAbstract';
export default class Star extends PCITAbstract {
    star(username: string, repo_name?: string): any;
    unstar(username: string, repo_name?: string): any;
}
