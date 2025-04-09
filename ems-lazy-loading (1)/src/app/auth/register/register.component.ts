import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name = '';
  username = '';
  email = '';
  phone = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (!this.name || !this.username || !this.email || !this.phone || !this.password) {
      alert('Please fill all required fields correctly.');
      return;
    }

    const newUser = {
      name: this.name,
      username: this.username,
      email: this.email,
      phone: this.phone,
      password: this.password
    };

    this.authService.register(newUser).subscribe(
      response => {
        alert('Registration Successful!');
        this.router.navigate(['/auth/login']); // Redirect to login page
      },
      error => {
        console.error('Registration failed:', error);
        alert('Registration Failed. Try again.');
      }
    );
  }
}
