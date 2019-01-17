import PCITAbstract from '../PCITAbstract';
export default class Issues extends PCITAbstract {
    translate(username: string, repo_name: string, issue_number: number): any;
}
