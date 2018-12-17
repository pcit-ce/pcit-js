import { PCIT } from '../PCIT';
export declare class Env extends PCIT {
    list(username: string, repo_name?: string): any;
    create(username: string, repo_name: string, name: string, value: any, is_public?: boolean): any;
    find(username: string, repo_name: string, env_var_id: number): any;
    update(username: string, repo_name: string, env_var_id: number, name: string, value: any, is_public?: boolean): any;
    delete(username: string, repo_name: string, env_var_id: number): any;
}
