import PCITAbstract from '../PCITAbstract';
export default class Org extends PCITAbstract {
    list(): any;
    find(git_type: string, org_name: string): any;
}
