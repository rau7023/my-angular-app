import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = false;

  login(credentials: { username: string; password: string }): Promise<{ success: boolean }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (credentials.username === '' && credentials.password === '') {
          this.loggedIn = true;
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 500); 
    });
  }

  logout() {
    this.loggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}

