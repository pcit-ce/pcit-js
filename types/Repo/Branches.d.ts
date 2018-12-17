import { PCIT } from '../PCIT';
export declare class Branches extends PCIT {
    list(git_type: string, username: string, repo_name?: string): any;
    find(git_type: string, username: string, repo_name: string, branch_name: string): any;
}
