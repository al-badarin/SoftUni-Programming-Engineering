import * as authService from './authService.js';

const request = (method, url, data) => {
    let options = {};
    let token = authService.getToken();

    if (method != 'GET') {
        options.method = method;
        options.headers = {
            'content-type': 'application/json',
        };

        if (token) {
            options.headers = {
                ...options.headers,
                'X-Authorization': token
            }
            //options.headers['X-Authorization'] = token;
        }

        options.body = JSON.stringify(data);
    }

    // return fetch(url, options).then(res => res.json());

    return fetch(url, options)
        .then(res => {
            if (res.url.endsWith('logout')) {
                return res;
            }
            return res.json();
        });
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const patch = request.bind({}, 'PATCH');
export const del = request.bind({}, 'DELETE');