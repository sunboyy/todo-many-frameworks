import { SessionService } from './session-service';

export class AuthService {
  static isSignedIn() {
    return !!SessionService.getAccessToken();
  }

  static doSignOut() {
    SessionService.destroy();
  }

  static doSignIn(accessToken, name) {
    if (!accessToken || !name) {
      return;
    }
    SessionService.setAccessToken(accessToken);
    SessionService.setName(name);
  }
}
