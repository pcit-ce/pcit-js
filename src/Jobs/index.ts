import { Request } from '../Client/Request';
import { PCIT } from '../PCIT';

export class Jobs extends PCIT {
  list() {
    return Request.request(this.entrypoint + '/jobs');
  }

  find(job_id: number) {
    return Request.request(this.entrypoint + '/job/' + job_id);
  }

  cancel(job_id: number) {
    return Request.request(
      this.entrypoint + '/job/' + job_id + '/cancel',
      'post',
      true,
    );
  }

  restart(job_id: number) {
    return Request.request(
      this.entrypoint + '/job/' + job_id + '/restart',
      'post',
      true,
    );
  }
}
