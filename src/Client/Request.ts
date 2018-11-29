export class Request {
  static request(
    url: string,
    method: string = 'get',
    token: string = '',
    data: object = {},
    header: object = {},
  ) {
    let request: any;
    let is_wx: boolean = false;

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
        is_wx = true;
      }
    }

    let headers = token ? { Authorization: 'token ' + token } : {};

    Object.assign(headers, header);

    let body: any = JSON.stringify(data);

    body = body === '{}' ? null : body;

    method = method.toUpperCase();

    if (is_wx) {
      // return wx.request({
      //
      // });
      return new Promise((resolve, reject) => {
        // @ts-ignore
        wx.request({
          url,
          method,
          data: body,
          header: headers,
          success(res: any) {
            resolve(res);
          },
          fail(e: any) {
            reject(e);
          },
        });
      });
    }

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
