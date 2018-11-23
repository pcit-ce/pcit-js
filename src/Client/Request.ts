export class Request {
  static request(
    url: string,
    method = 'get',
    token: boolean = false,
    data: object = {},
    header: object = {},
  ) {
    let request;

    try {
      typeof fetch === 'function';
      request = fetch;
    } catch (e) {
      request = require('node-fetch');
    }

    let headers = token ? { Authorization: 'token ' + token } : {};

    Object.assign(headers, header);

    return request(url, {
      method,
      headers: headers ? headers : {},
      body: JSON.stringify(data),
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        return res;
      });
  }
}
