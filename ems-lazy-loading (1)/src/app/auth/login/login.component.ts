import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      alert('Please fill in all fields correctly.');
      return;
    }

    this.authService.login(this.email, this.password).subscribe(
      users => {
        const user = users.find(u => u.email === this.email && u.password === this.password);

        if (user) {
          localStorage.setItem('user', JSON.stringify(user)); // Store user in local storage
          alert('Login Successful!');
          this.router.navigate(['/dashboard']); // Redirect to dashboard
        } else {
          alert('Invalid email or password.');
        }
      },
      error => {
        console.error('Login failed:', error);
        alert('Login Failed. Try again.');
      }
    );
  }
}
