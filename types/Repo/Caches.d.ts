import PCITAbstract from '../PCITAbstract';
export default class Caches extends PCITAbstract {
    list(username: string, repo_name?: string): any;
    delete(username: string, repo_name?: string): any;
}
