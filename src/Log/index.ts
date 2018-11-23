import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Log extends PCIT {
  find(job_id: number) {
    return Request.request(this.entrypoint + '/job/' + job_id + '/log');
  }

  delete(job_id: number) {
    return Request.request(
      this.entrypoint + '/job/' + job_id + '/log',
      'delete',
    );
  }
}
