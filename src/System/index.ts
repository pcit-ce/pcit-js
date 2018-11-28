import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class System extends PCIT {
  getOauthClientId() {
    return Request.request(
      this.entrypoint + '/ci/oauth_client_id',
      'get',
      this.token,
    );
  }

  getPending() {
    return Request.request(this.entrypoint + '/ci/pending', 'GET', this.token);
  }

  getGitHubAppInstallationAddress(uid: number) {
    return Request.request(
      this.entrypoint + '/ci/github_app_installation/' + uid,
      'get',
      this.token,
    );
  }

  getGitHubAppSettingsAddress(org_name: string) {
    return Request.request(
      this.entrypoint + '/ci/github_app_settings/' + org_name,
      'get',
      this.token,
    );
  }

  about() {
    return Request.request(this.entrypoint + '/ci/about');
  }
}
