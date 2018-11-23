import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Builds extends PCIT {
  list() {
    return Request.request(this.entrypoint + '/builds', 'get');
  }

  findByRepo(git_type: string, username: string, repo_name: string) {
    return Request.request(
      this.entrypoint +
        '/repo/' +
        git_type +
        '/' +
        username +
        '/' +
        repo_name +
        '/builds',
    );
  }

  current(git_type: string, username: string, repo_name: string) {
    return Request.request(
      this.entrypoint +
        '/repo/' +
        [git_type, username, repo_name, 'build', 'current'].join('/'),
    );
  }

  find(build_id: number) {
    return Request.request(this.entrypoint + '/build/' + build_id);
  }

  cancel(build_id: number) {
    return Request.request(
      this.entrypoint + '/build/' + build_id,
      'post',
      true,
    );
  }

  restart(build_id: number) {
    return Request.request(
      this.entrypoint + '/build/' + build_id + '/restart',
      'post',
      true,
    );
  }
}
