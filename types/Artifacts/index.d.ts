import PCITAbstract from '../PCITAbstract';
export default class Artifacts extends PCITAbstract {
    list(git_type: string, username: string, repo: string, job_id: number): any;
    findByRepo(git_type: string, username: string, repo: string): any;
    find(git_type: string, username: string, repo: string, job_id: number, artifact_name: string): any;
    delete(git_type: string, username: string, repo: string, job_id: number, artifact_name: string): any;
}
