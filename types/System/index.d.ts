import PCITAbstract from '../PCITAbstract';
export default class System extends PCITAbstract {
    getOauthClientId(): any;
    getPending(): any;
    getGitHubAppInstallationAddress(uid: number): any;
    getGitHubAppSettingsAddress(org_name: string): any;
    about(): any;
}
