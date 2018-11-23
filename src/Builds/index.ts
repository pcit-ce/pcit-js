import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Builds extends PCIT {
  list() {}

  findByRepo() {}

  current() {}

  find(build_id: number) {
    return Request.request(this.entrypoint + '/build/' + build_id);
  }

  cancel() {}

  restart() {}
}
