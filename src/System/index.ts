import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class System extends PCIT {
  getOauthClientId() {
    return Request.request(this.entrypoint + '/ci/oauth_client_id');
  }

  getPending() {
    return Request.request(this.entrypoint + '/ci/pending', 'GET', this.token);
  }

  getGitHubAppInstallationAddress(uid) {
    return Request.request(
      this.entrypoint + '/ci/github_app_installation/' + uid,
      'get',
      this.token,
    );
  }

  getGitHubAppSettingsAddress(org_name) {
    return Request.request(
      this.entrypoint + '/ci/github_app_settings/' + org_name,
      'get',
      this.token,
    );
  }
}
