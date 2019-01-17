import Request from '../Client/Request';
import PCITAbstract from '../PCITAbstract';

export default class Jobs extends PCITAbstract {
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
      this.token,
    );
  }

  restart(job_id: number) {
    return Request.request(
      this.entrypoint + '/job/' + job_id + '/restart',
      'post',
      this.token,
    );
  }
}
