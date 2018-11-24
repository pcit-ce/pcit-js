import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Star extends PCIT {
  star(username: string, repo_name?: string) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/star`,
      'post',
      this.token,
    );
  }

  unstar(username: string, repo_name?: string) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/unstar`,
      'post',
      this.token,
    );
  }
}
