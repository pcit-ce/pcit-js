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
      true,
    );
  }

  deactivate(username, repo_name) {
    return Request.request(
      this.entrypoint +
        '/repo/' +
        [username, repo_name].join('/') +
        '/deactivate',
      'post',
      true,
    );
  }

  branches() {
    return new Branches(this.entrypoint, this.token);
  }

  caches() {
    return new Caches(this.entrypoint, this.token);
  }

  crons() {
    return new Crons(this.entrypoint, this.token);
  }

  env() {
    return new Env(this.entrypoint, this.token);
  }

  issues() {
    return new Issues(this.entrypoint, this.token);
  }

  requests() {
    return new Requests(this.entrypoint, this.token);
  }

  settings() {
    return new Settings(this.entrypoint, this.token);
  }

  star() {
    return new Star(this.entrypoint, this.token);
  }

  status() {
    return new Status(this.entrypoint, this.token);
  }
}
