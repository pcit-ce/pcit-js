import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Settings extends PCIT {
  list(username: string, repo_name: string) {
    return Request.request(
      this.entrypoint + `/repo/${username}/${repo_name}/settings`,
    );
  }

  get(username: string, repo_name: string, setting_name: string) {
    return Request.request(
      this.entrypoint +
        `/repo/${username}/${repo_name}/setting/${setting_name}`,
      'get',
      true,
    );
  }

  update(
    username: string,
    repo_name: string,
    setting_name: string,
    setting_value: any,
  ) {
    return Request.request(
      this.entrypoint +
        `/repo/${username}/${repo_name}/setting/${setting_name}`,
      'patch',
      true,
      { 'setting.value': setting_value },
    );
  }
}
