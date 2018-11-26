import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';
import { Branches } from './Branches';
import { Caches } from './Caches';
import { Crons } from './Crons';
import { Env } from './Env';
import { Issues } from './Issues';
import { Requests } from './Requests';
import { Settings } from './Settings';
import { Star } from './Star';
import { Status } from './Status';

export class Repo extends PCIT {
  list() {
    return Request.request(this.entrypoint + '/repos', 'get', this.token);
  }

  listByOwner(git_type: string, username: string) {
    return Request.request(this.entrypoint + `/repos/${git_type}/${username}`);
  }

  find(git_type: string, username: string, repo_name?: string) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + `/repo/${git_type}/${repo_full_name}`,
    );
  }

  active(username: string, repo_name: string) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + '/repo/' + repo_full_name + '/activate',
      'post',
      this.token,
    );
  }

  deactivate(username: string, repo_name: string) {
    return Request.request(
      this.entrypoint +
        '/repo/' +
        [username, repo_name].join('/') +
        '/deactivate',
      'post',
      this.token,
    );
  }

  get branches() {
    return new Branches(this.token, this.entrypoint);
  }

  get caches() {
    return new Caches(this.token, this.entrypoint);
  }

  get crons() {
    return new Crons(this.token, this.entrypoint);
  }

  get env() {
    return new Env(this.token, this.entrypoint);
  }

  get issues() {
    return new Issues(this.token, this.entrypoint);
  }

  get requests() {
    return new Requests(this.token, this.entrypoint);
  }

  get settings() {
    return new Settings(this.token, this.entrypoint);
  }

  get star() {
    return new Star(this.token, this.entrypoint);
  }

  get status() {
    return new Status(this.token, this.entrypoint);
  }
}
