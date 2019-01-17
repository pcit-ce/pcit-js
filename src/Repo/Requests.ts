import PCITAbstract from '../PCITAbstract';
import Request from '../Client/Request';

export default class Requests extends PCITAbstract {
  list(
    git_type: string,
    username: string,
    repo_name?: string,
    before = 0,
    limit = 0,
  ) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint +
        `/repo/${git_type}/${repo_full_name}/requests?before=${before}&limit=${limit}`,
    );
  }

  create(
    username: string,
    repo_name: string,
    message: string,
    branch: string,
    config: string = '',
  ) {
    let repo_full_name = this.getRepoFullName(username, repo_name);
    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/requests`,
      'post',
      this.token,
      { request: { message, branch, config } },
    );
  }

  get(username: string, repo_name: string, request_id: number) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/request/${request_id}`,
    );
  }
}
