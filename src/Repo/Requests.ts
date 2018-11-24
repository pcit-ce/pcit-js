import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Requests extends PCIT {
  list(username: string, repo_name?: string) {
    let repo_full_name = this.getRepoFullName(username, repo_name);
    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/requests`,
    );
  }

  create(
    username: string,
    repo_name: string,
    message: string,
    branch: string,
    config: string = '',
  ) {
    let repo_full_name = this.getRepoFullName(username, repo_name);
    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/requests`,
      'post',
      this.token,
      { request: { message, branch, config } },
    );
  }

  get(username: string, repo_name: string, request_id: number) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/request/${request_id}`,
    );
  }
}
