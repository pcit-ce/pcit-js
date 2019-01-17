import PCITAbstract from '../PCITAbstract';
import Request from '../Client/Request';

export default class Issues extends PCITAbstract {
  translate(username: string, repo_name: string, issue_number: number) {
    let repo_full_name = this.getRepoFullName(username, repo_name);

    return Request.request(
      this.entrypoint +
        `/repo/${repo_full_name}/issues/translate/${issue_number}`,
      'patch',
      this.token,
    );
  }
}
