import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Star extends PCIT {
  star(username: string, repo_name: string) {
    return Request.request(
      this.entrypoint + `/repo/${username}/${repo_name}/star`,
      'post',
      true,
    );
  }

  unstar(username: string, repo_name: string) {
    return Request.request(
      this.entrypoint + `/repo/${username}/${repo_name}/unstar`,
      'post',
      true,
    );
  }
}
