import { PCIT } from '../PCIT';
export declare class Requests extends PCIT {
    list(git_type: string, username: string, repo_name?: string): any;
    create(username: string, repo_name: string, message: string, branch: string, config?: string): any;
    get(username: string, repo_name: string, request_id: number): any;
}
