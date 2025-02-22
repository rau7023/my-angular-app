import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onLogin() {
    const result = await this.authService.login({ username: this.username, password: this.password });
    if (result.success) {
      this.router.navigate(['/protected']);
    } else {
      this.error = 'Login failed. Please check your credentials.';
    }
  }
}


