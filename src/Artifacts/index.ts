import Request from '../Client/Request';
import PCITAbstract from '../PCITAbstract';

export default class Artifacts extends PCITAbstract {
  list(git_type: string, username: string, repo: string, job_id: number) {
    return Request.request(
      this.entrypoint +
        `/${git_type}/${username}/${repo}/jobs/${job_id}/artifacts`,
    );
  }

  findByRepo(git_type: string, username: string, repo: string) {
    return Request.request(
      this.entrypoint + `/${git_type}/${username}/${repo}/artifacts`,
    );
  }

  find(
    git_type: string,
    username: string,
    repo: string,
    job_id: number,
    artifact_name: string,
  ) {
    return Request.request(
      this.entrypoint +
        `/${git_type}/${username}/${repo}/jobs/${job_id}/artifacts/${artifact_name}`,
      'get',
      this.token,
    );
  }

  delete(
    git_type: string,
    username: string,
    repo: string,
    job_id: number,
    artifact_name: string,
  ) {
    return Request.request(
      this.entrypoint +
        `/${git_type}/${username}/${repo}/jobs/${job_id}/artifacts/${artifact_name}`,
      'delete',
      this.token,
    );
  }
}
