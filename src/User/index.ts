import { PCIT } from '../PCIT';
import { BetaFeatures } from './BetaFeatures';
import { Request } from '../Client/Request';

export class User extends PCIT {
  get betaFeatures() {
    return new BetaFeatures(this.token, this.entrypoint);
  }

  findByCurrent() {
    return Request.request(this.entrypoint + '/user', 'get', this.token);
  }

  find(git_type: string, username: string, is_basic: boolean = false) {
    return Request.request(
      this.entrypoint + `/user/${git_type}/${username}`,
      'get',
      is_basic ? '' : this.token,
    );
  }

  sync() {
    return Request.request(this.entrypoint + '/user/sync', 'post', this.token);
  }

  active(git_type: string, username_or_uid: number | string) {
    return Request.request(
      this.entrypoint + `/user/${git_type}/${username_or_uid}/active`,
    );
  }
}
