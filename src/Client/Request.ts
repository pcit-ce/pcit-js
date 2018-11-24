export class Request {
  static request(
    url: string,
    method: string = 'get',
    token: string = '',
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

    let body = JSON.stringify(data);

    body = body === '{}' ? null : body;

    method = method.toUpperCase();

    return request(url, {
      method,
      headers: headers ? headers : {},
      body,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(res => {
        return res;
      });
  }
}
