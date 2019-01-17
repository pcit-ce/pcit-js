import PCITAbstract from '../PCITAbstract';
import Request from '../Client/Request';

export default class Log extends PCITAbstract {
  find(job_id: number) {
    return Request.request(this.entrypoint + '/job/' + job_id + '/log');
  }

  delete(job_id: number) {
    return Request.request(
      this.entrypoint + '/job/' + job_id + '/log',
      'delete',
      this.token,
    );
  }
}
