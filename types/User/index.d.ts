import { PCIT } from '../PCIT';
import { BetaFeatures } from './BetaFeatures';
export declare class User extends PCIT {
    readonly betaFeatures: BetaFeatures;
    getToken(git_type: string, username: string, password: string): any;
    current(): any;
    find(git_type: string, username: string, is_basic?: boolean): any;
    sync(): any;
    active(git_type: string, username_or_uid: number | string): any;
}
