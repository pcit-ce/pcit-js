import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Crons extends PCIT {
  list(username: string, repo_name: string) {
    return Request.request(
      this.entrypoint + `/repo/${username}/${repo_name}/crons`,
      'get',
      true,
    );
  }

  find(cron_id: number) {
    return Request.request(this.entrypoint + `/cron/${cron_id}`, 'get', true);
  }

  delete(cron_id: number) {
    return Request.request(
      this.entrypoint + `/cron/${cron_id}`,
      'delete',
      true,
    );
  }

  findByBranch(username: string, repo_name: string, branch: string) {
    return Request.request(
      this.entrypoint + `/repo/${username}/${repo_name}/branch/${branch}/cron`,
      'get',
      true,
    );
  }

  create(
    username: string,
    repo_name: string,
    branch: string,
    interval: string = 'monthly',
  ) {
    return Request.request(
      this.entrypoint + `/repo/${username}/${repo_name}/branch/${branch}/cron`,
      'POST',
      true,
      { cron_interval: interval },
    );
  }
}
