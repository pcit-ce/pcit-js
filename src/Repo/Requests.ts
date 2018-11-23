import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Requests extends PCIT {
  list(username: string, repo_name: string) {
    return Request.request(
      this.entrypoint + `/repo/${username}/${repo_name}/requests`,
    );
  }

  create(
    username: string,
    repo_name: string,
    message: string,
    branch: string,
    config: string = '',
  ) {
    return Request.request(
      this.entrypoint + `/repo/${username}/${repo_name}/requests`,
      'post',
      true,
      { request: { message, branch, config } },
    );
  }

  get(username: string, repo_name: string, request_id: number) {
    return Request.request(
      this.entrypoint + `/repo/${username}/${repo_name}/request/${request_id}`,
    );
  }
}
