import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  public destroy(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('name');
  }

  get accessToken(): string {
    return sessionStorage.getItem('token');
  }

  set accessToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  get name(): string {
    return sessionStorage.getItem('name');
  }

  set name(name: string) {
    sessionStorage.setItem('name', name);
  }
}
