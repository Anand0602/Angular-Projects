import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  submittedData: { id: number; name: string; age: number }[] = [];
  selectedUser: { id: number; name: string; age: number } | null = null; // Holds user for editing

  handleFormSubmit(user: { id: number; name: string; age: number }) {
    if (this.selectedUser) {
      // Update existing user
      const index = this.submittedData.findIndex(u => u.id === this.selectedUser?.id);
      if (index !== -1) {
        this.submittedData[index] = user;
      }
    } else {
      // Add new user with unique id
      user.id = this.submittedData.length ? Math.max(...this.submittedData.map(u => u.id)) + 1 : 1;
      this.submittedData.push(user);
    }
    this.selectedUser = null; // Reset after update
  }

  handleEditUser(user: { id: number; name: string; age: number }) {
    this.selectedUser = { ...user }; // Set user to be edited
  }
}
