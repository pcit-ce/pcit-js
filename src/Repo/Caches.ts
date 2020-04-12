import PCITAbstract from '../PCITAbstract';
import Request from '../Client/Request';

export default class Caches extends PCITAbstract {
  list(username: string, repo_name?: string) {
    let repo_full_name = this.getRepoFullName(username, repo_name);
    return Request.request(
      this.entrypoint + `/repo/${repo_full_name}/caches`,
      'get',
      this.token,
    );
  }

  delete(username: string, repo_name?: string, branch: string | null = null) {
    return Request.request(
      this.entrypoint +
        `/repo/${username}/${repo_name}/caches${branch ? '/' + branch : null}`,
      'delete',
      this.token,
    );
  }
}
