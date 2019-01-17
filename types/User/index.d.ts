import PCITAbstract from '../PCITAbstract';
import BetaFeatures from './BetaFeatures';
export default class User extends PCITAbstract {
    readonly betaFeatures: BetaFeatures;
    getToken(git_type: string, username: string, password: string): any;
    current(): any;
    find(git_type: string, username: string, is_basic?: boolean): any;
    sync(): any;
    active(git_type: string, username_or_uid: number | string): any;
}
