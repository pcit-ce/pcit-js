import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Branches extends PCIT {
  list(git_type: string, username: string, repo_name?: string) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + `/repo/${git_type}/${repo_full_name}/branches`,
    );
  }

  find(
    git_type: string,
    username: string,
    repo_name: string,
    branch_name: string,
  ) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint +
        `/repo/${git_type}/${repo_full_name}/branch/${branch_name}`,
    );
  }
}
