/* istanbul ignore file */
/* tslint:disable */

export class ApiError extends Error {
  constructor(response, message) {
    super(message);

    this.name = 'ApiError';
    this.url = response.url;
    this.status = response.status;
    this.statusText = response.statusText;
    this.body = response.body;
  }
}
