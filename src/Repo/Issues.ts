import { PCIT } from '../PCIT';
import { Request } from '../Client/Request';

export class Issues extends PCIT {
  translate(username: string, repo_name: string, issue_number: number) {
    return Request.request(
      this.entrypoint +
        `/repo/${username}/${repo_name}/issues/translate/${issue_number}`,
      'patch',
      true,
    );
  }
}
