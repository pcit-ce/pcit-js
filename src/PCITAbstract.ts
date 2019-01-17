export default abstract class PCITAbstract {
  constructor(
    readonly token: string = '',
    readonly entrypoint: string = 'https://ci.khs1994.com/api',
  ) {
    if (entrypoint === '') {
      this.entrypoint = '/api';
    }
  }

  getRepoFullName(username: string, repo_name?: string) {
    return repo_name ? `${username}/${repo_name}` : username;
  }
}
