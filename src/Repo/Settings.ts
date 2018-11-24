import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Settings extends PCIT {
  list(username: string, repo_name?: string) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/settings`,
    );
  }

  get(username: string, repo_name: string, setting_name: string) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/setting/${setting_name}`,
      'get',
      this.token,
    );
  }

  update(
    username: string,
    repo_name: string,
    setting_name: string,
    setting_value: any,
  ) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/setting/${setting_name}`,
      'patch',
      this.token,
      { 'setting.value': setting_value },
    );
  }
}
