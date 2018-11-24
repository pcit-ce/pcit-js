import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Env extends PCIT {
  list(username: string, repo_name?: string) {
    return Request.request(this.entrypoint + `/repo/${username}/${repo_name}`);
  }

  create(
    username: string,
    repo_name: string,
    name: string,
    value: any,
    is_public: boolean = false,
  ) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/env_vars`,
      'post',
      this.token,
      {
        'env_var.name': name,
        'env_var.value': value,
        'env_var.public': is_public,
      },
    );
  }

  find(username: string, repo_name: string, env_var_id: number) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/env_var/${env_var_id}`,
      'get',
      this.token,
    );
  }

  update(
    username: string,
    repo_name: string,
    env_var_id: number,
    name: string,
    value: any,
    is_public: boolean = false,
  ) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/env_var/${env_var_id}`,
      'patch',
      this.token,
      { 'env_var.value': value, 'env_var.public': false },
    );
  }

  delete(username: string, repo_name: string, env_var_id: number) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/env_var/${env_var_id}`,
      'delete',
      this.token,
    );
  }
}
