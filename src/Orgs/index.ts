import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Orgs extends PCIT {
  list() {
    return Request.request(this.entrypoint + '/orgs', 'get', true);
  }

  find(git_type: string, org_name: string) {
    return Request.request(
      this.entrypoint + '/org/' + git_type + '/' + org_name,
    );
  }
}
