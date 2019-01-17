export default class Request {
  static request(
    url: string,
    method: string = 'get',
    token: string = '',
    data: object = {},
    header: object = {},
  ) {
    let request: any;

    try {
      if (typeof fetch === 'function') {
        request = fetch;
      } else {
        throw Error('not support fetch');
      }
    } catch (e) {
      try {
        // @ts-ignore
        let fetch = require('node-fetch');
        if (typeof fetch === 'function') {
          request = fetch;
        } else {
          throw Error('is not node env');
        }
      } catch (e) {
        let fetch = require('wx-fetch');
        request = fetch;
      }
    }

    let headers = token ? { Authorization: 'token ' + token } : {};

    Object.assign(headers, header);

    let body: any = JSON.stringify(data);

    body = body === '{}' ? null : body;

    method = method.toUpperCase();

    return request(url, {
      method,
      headers,
      body,
    })
      .then((res: any) => {
        if (res.ok) {
          return res.json();
        }

        // console.log('not ok');

        return Promise.reject(res);
      })
      .then((res: any) => {
        return res;
      })
      .catch((e: any) => Promise.reject(e));
  }
}
