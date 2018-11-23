import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';
import { Branches } from './Branches';

export class Repo extends PCIT {
  list() {
    return Request.request(this.entrypoint + '/repos', 'get');
  }

  listByOwner(username: string, git_type = 'github') {
    return Request.request(
      this.entrypoint + `/repos/${git_type}/${username}`,
      'get',
    );
  }

  find(username: string, repo_name: string, git_type = 'github') {
    return Request.request(
      this.entrypoint + `/repo/${git_type}/${username}/${repo_name}`,
      'get',
    );
  }

  active(username, repo_name) {}

  deactivate(username, repo_name) {}

  branches() {
    return new Branches(this.entrypoint, this.token);
  }
}
