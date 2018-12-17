import { PCIT } from '../PCIT';
export declare class Crons extends PCIT {
    list(username: string, repo_name?: string): any;
    find(cron_id: number): any;
    delete(cron_id: number): any;
    findByBranch(username: string, repo_name: string, branch: string): any;
    create(username: string, repo_name: string, branch: string, interval?: string): any;
}
