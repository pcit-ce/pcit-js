import PCITAbstract from '../PCITAbstract';
export default class Jobs extends PCITAbstract {
    list(): any;
    find(job_id: number): any;
    cancel(job_id: number): any;
    restart(job_id: number): any;
}
