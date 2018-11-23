import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class System extends PCIT {
  getOauthClientId() {
    return Request.request('', 'get');
  }

  getPending() {
    return Request.request(this.entrypoint + '/ci/pending', 'GET', [], true);
  }

  getGitHubAppInstallationAddress(uid) {
    return Request.request(
      this.entrypoint + '/ci/github_app_installation/' + uid,
      'get',
      [],
      true,
    );
  }

  getGitHubAppSettingsAddress(org_name) {
    return Request.request(
      this.entrypoint + '/ci/github_app_settings/' + org_name,
      'get',
      [],
      true,
    );
  }
}
