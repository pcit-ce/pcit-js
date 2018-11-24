import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Crons extends PCIT {
  list(username: string, repo_name?: string) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/crons`,
      'get',
      this.token,
    );
  }

  find(cron_id: number) {
    return Request.request(
      this.entrypoint + `/cron/${cron_id}`,
      'get',
      this.token,
    );
  }

  delete(cron_id: number) {
    return Request.request(
      this.entrypoint + `/cron/${cron_id}`,
      'delete',
      this.token,
    );
  }

  findByBranch(username: string, repo_name: string, branch: string) {
    let repo_full_name = this.getRepoFullName(username, repo_name);
    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/branch/${branch}/cron`,
      'get',
      this.token,
    );
  }

  create(
    username: string,
    repo_name: string,
    branch: string,
    interval: string = 'monthly',
  ) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/branch/${branch}/cron`,
      'POST',
      this.token,
      { cron_interval: interval },
    );
  }
}
