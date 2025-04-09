import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent {
  form: FormGroup;
  successMessage: string | null = null;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      decision: new FormControl('no', Validators.required), 
      locationInfo: new FormArray([]) 
    });
  }

  get locationInfo(): FormArray {
    return this.form.get('locationInfo') as FormArray;
  }

  addLocationInput(): void {
    if (this.form.get('decision')?.value === 'yes') {
      this.locationInfo.push(new FormGroup({
        location: new FormControl('', Validators.required)
      }));
    }
  }

  submitForm(): void {
    if (this.form.valid) {
      this.successMessage = 'Form submitted successfully!';
      console.log('Form Data:', this.form.value);
    } else {
      this.successMessage = null;
      console.log('Form is invalid!');
    }
  }
}