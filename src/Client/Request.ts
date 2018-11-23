export class Request {
  static request(
    url: string,
    method = 'get',
    data = [],
    token: boolean = false,
    header = [],
  ) {
    let request;

    try {
      typeof fetch === 'function';
      request = fetch;
    } catch (e) {
      request = require('node-fetch');
    }

    return request(url)
      .then(res => {
        return res.json();
      })
      .then(res => {
        return res;
      });
  }
}
