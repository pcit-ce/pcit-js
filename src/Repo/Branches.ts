import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Branches extends PCIT {
  list(git_type: string, username: string, repo_name: string) {
    return Request.request(
      this.entrypoint + `/repo/${git_type}/${username}/${repo_name}/branches`,
    );
  }

  find(
    git_type: string,
    username: string,
    repo_name: string,
    branch_name: string,
  ) {
    return Request.request(
      this.entrypoint +
        `/repo/${git_type}/${username}/${repo_name}/branch/${branch_name}`,
    );
  }
}
