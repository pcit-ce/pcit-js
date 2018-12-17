import { PCIT } from '../PCIT';
export declare class Jobs extends PCIT {
    list(): any;
    find(job_id: number): any;
    cancel(job_id: number): any;
    restart(job_id: number): any;
}
