export class PCIT {
  readonly entrypoint: string;
  readonly token: string;

  constructor(
    token: string = '',
    entrypoint: string = 'https://ci.khs1994.com/api',
  ) {
    this.entrypoint = entrypoint;
    this.token = token;
  }
}
