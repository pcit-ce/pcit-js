import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Builds extends PCIT {
  list(before: number = 0, limit: number = 25) {
    return Request.request(
      this.entrypoint + `/builds?before=${before}&limit=${limit}`,
      'get',
    );
  }

  findByRepo(
    git_type: string,
    username: string,
    repo_name?: string,
    pr_only: boolean = false,
    before: number = 0,
    limit: number = 25,
  ) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint +
        '/repo/' +
        git_type +
        '/' +
        repo_full_name +
        `/builds?before=${before}&limit=${limit}` +
        (pr_only ? '&type=pr' : ''),
    );
  }

  current(git_type: string, username: string, repo_name?: string) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint +
        '/repo/' +
        [git_type, repo_full_name, 'build', 'current'].join('/'),
    );
  }

  find(build_id: number) {
    return Request.request(this.entrypoint + '/build/' + build_id);
  }

  cancel(build_id: number) {
    return Request.request(
      this.entrypoint + '/build/' + build_id,
      'post',
      this.token,
    );
  }

  restart(build_id: number) {
    return Request.request(
      this.entrypoint + '/build/' + build_id + '/restart',
      'post',
      this.token,
    );
  }
}
