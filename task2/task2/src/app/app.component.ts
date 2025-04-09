import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  formGroup: FormGroup = new FormGroup({
    fieldsArray: new FormArray([])
  });
  submittedData: any[] = [];
  notificationMessage: string | null = null;
  notificationClass: string | null = null;
  editingIndex: number | null = null; // Track the row being edited

  constructor() {}

  get fieldsArray(): FormArray {
    return this.formGroup.get('fieldsArray') as FormArray;
  }

  // Add a new record
  addFields(): void {
    const fieldGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
    this.fieldsArray.push(fieldGroup);
  }

  // Submit form data
  submit(): void {
    if (this.formGroup.valid) {
      this.submittedData = [...this.submittedData, ...this.fieldsArray.value];
      this.fieldsArray.clear();
      this.showNotification('Data submitted successfully!', 'alert-success');
    } else {
      this.showNotification('Please fill all fields correctly!', 'alert-danger');
      this.markAllAsTouched();
    }
  }

  // Edit a specific record
  editData(index: number): void {
    this.editingIndex = index;
    const dataToEdit = this.submittedData[index];
    this.fieldsArray.clear();
    const fieldGroup = new FormGroup({
      name: new FormControl(dataToEdit.name, Validators.required),
      address: new FormControl(dataToEdit.address, Validators.required),
      phone: new FormControl(dataToEdit.phone, Validators.required),
      email: new FormControl(dataToEdit.email, [Validators.required, Validators.email])
    });
    this.fieldsArray.push(fieldGroup);
    this.showNotification('Editing the selected record', 'alert-info');
  }

  // Save changes after editing
  saveEdit(): void {
    if (this.formGroup.valid && this.editingIndex !== null) {
      this.submittedData[this.editingIndex] = this.fieldsArray.value[0];
      this.editingIndex = null;
      this.fieldsArray.clear();
      this.showNotification('Changes saved successfully!', 'alert-success');
    } else {
      this.showNotification('Please correct errors before saving!', 'alert-danger');
    }
  }

  // Delete a specific record
  deleteData(index: number): void {
    this.submittedData.splice(index, 1);
    this.showNotification('Record deleted successfully!', 'alert-warning');
    if (this.editingIndex === index) {
      this.editingIndex = null; // Cancel editing if the record was being edited
    }
  }

  // Reset the form
  reset(): void {
    this.formGroup.reset();
    this.fieldsArray.clear();
    this.editingIndex = null;
    this.showNotification('Form reset!', 'alert-info');
  }

  // Mark all fields as touched for validation
  private markAllAsTouched(): void {
    this.fieldsArray.controls.forEach((group) => {
      (group as FormGroup).markAllAsTouched();
    });
  }

  // Show a notification with a message and CSS class
  private showNotification(message: string, cssClass: string): void {
    this.notificationMessage = message;
    this.notificationClass = cssClass;
    setTimeout(() => {
      this.notificationMessage = null;
      this.notificationClass = null;
    }, 3000);
  }
}