import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Caches extends PCIT {
  list(username: string, repo_name?: string) {
    let repo_full_name = this.getRepoFullName(username, repo_name);
    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/caches`,
      'get',
      this.token,
    );
  }

  delete(username: string, repo_name?: string) {
    return Request.request(
      this.entrypoint + `/repo/${username}/${repo_name}/caches`,
      'delete',
      this.token,
    );
  }
}
