class BaseAPI {
  constructor(request) {
    this.request = request;
  }

  get(url) {
    return this.request.get(url);
  }

  post(url, data) {
    return this.request.post(url, {
      data,
    });
  }

  postForm(url, data) {
    return this.request.post(url, {
      form: data,
    });
  }

  put(url, data) {
    return this.request.put(url, {
      data,
    });
  }

  delete(url) {
    return this.request.delete(url);
  }
}

module.exports = { BaseAPI };
