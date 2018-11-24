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

  active(username, repo_name) {
    return Request.request(
      this.entrypoint +
        '/repo/' +
        [username, repo_name].join('/') +
        '/activate',
      'post',
      this.token,
    );
  }

  deactivate(username, repo_name) {
    return Request.request(
      this.entrypoint +
        '/repo/' +
        [username, repo_name].join('/') +
        '/deactivate',
      'post',
      this.token,
    );
  }

  branches() {
    return new Branches(this.token, this.entrypoint);
  }

  caches() {
    return new Caches(this.token, this.entrypoint);
  }

  crons() {
    return new Crons(this.token, this.entrypoint);
  }

  env() {
    return new Env(this.token, this.entrypoint);
  }

  issues() {
    return new Issues(this.token, this.entrypoint);
  }

  requests() {
    return new Requests(this.token, this.entrypoint);
  }

  settings() {
    return new Settings(this.token, this.entrypoint);
  }

  star() {
    return new Star(this.token, this.entrypoint);
  }

  status() {
    return new Status(this.token, this.entrypoint);
  }
}
