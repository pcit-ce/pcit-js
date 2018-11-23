import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Caches extends PCIT {
  list(username: string, repo_name: string) {
    return Request.request(
      this.entrypoint + `/repo/${username}/${repo_name}/caches`,
      'get',
      true,
    );
  }

  delete(username: string, repo_name: string) {
    return Request.request(
      this.entrypoint + `/repo/${username}/${repo_name}/caches`,
      'delete',
      true,
    );
  }
}
