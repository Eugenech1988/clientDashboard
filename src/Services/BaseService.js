import axios from 'axios';
import URLS from 'conf/urls';

const REST_METHODS = ['get', 'post', 'put', 'delete'];

const createRequestParams = (path, data, method) => {
  if (!path) return false;

  const newParams = {
    url: URLS.core[path] ? URLS.core[path].url : ''
  };

  if (!data) return newParams;

  if (data.path) {
    newParams.url += `/${data.path}`;
  }

  return newParams;
};

export default new Proxy({}, {
  get: (target, method) => {
    if (!REST_METHODS.includes(method)) {
      return Promise.reject('A non-supported REST method');
    }
    return (path, data) => {
      return axios({ method, ...createRequestParams(path, data, method) })
        .then(response => {
          if (response.status < 200 || response.status >= 300) {
            return Promise.reject({ error: response.statusText, response });
          }
          return response;
        })
        .catch(({ error }) => {
          const errorMessage = error && error.body && error.body.errors ? error.body.errors : error;
          console.error(`BaseService: ${errorMessage} error`);
          throw new Error(errorMessage);
        });
    };
  }

});
