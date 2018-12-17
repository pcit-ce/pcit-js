import { PCIT } from '../PCIT';
export declare class Settings extends PCIT {
    list(username: string, repo_name?: string): any;
    get(username: string, repo_name: string, setting_name: string): any;
    update(username: string, repo_name: string, setting_name: string, setting_value: any): any;
}
