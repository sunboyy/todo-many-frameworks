export class SessionService {
  static destroy() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('name');
  }

  static getAccessToken() {
    return sessionStorage.getItem('token');
  }

  static setAccessToken(token) {
    sessionStorage.setItem('token', token);
  }

  static setName(name) {
    sessionStorage.setItem('name', name);
  }
}
