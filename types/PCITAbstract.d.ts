export default abstract class PCITAbstract {
    readonly token: string;
    readonly entrypoint: string;
    constructor(token?: string, entrypoint?: string);
    getRepoFullName(username: string, repo_name?: string): string;
}
