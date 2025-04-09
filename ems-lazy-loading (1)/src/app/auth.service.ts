import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // ✅ Register a new user
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, userData);
  }

  // ✅ Login a user
  login(email: string, password: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
