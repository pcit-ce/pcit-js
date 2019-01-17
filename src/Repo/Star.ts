import PCITAbstract from '../PCITAbstract';
import Request from '../Client/Request';

export default class Star extends PCITAbstract {
  star(username: string, repo_name?: string) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/star`,
      'post',
      this.token,
    );
  }

  unstar(username: string, repo_name?: string) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/unstar`,
      'post',
      this.token,
    );
  }
}
