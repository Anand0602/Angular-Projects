import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  AddressForm: FormGroup;
  customerList: any[] = [];

  constructor() {
    this.AddressForm = new FormGroup({
      customerName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl(''),
      state: new FormControl(''),
      region: new FormControl(''),
      country: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });
    const storedData = localStorage.getItem('customerList');
    if (storedData) {
      this.customerList = JSON.parse(storedData);
    }
  }

  addData() {
    if (this.AddressForm.invalid) {
      alert("Please fill all required fields before adding data.");
      return;
    }

    const newCustomer = this.AddressForm.value;
    let isDuplicate = false;

    for (let customer of this.customerList) {
     if (
    customer.customerName === newCustomer.customerName &&
    customer.address === newCustomer.address &&
    customer.city === newCustomer.city &&
    customer.state === newCustomer.state &&
    customer.region === newCustomer.region &&
    customer.country === newCustomer.country &&
    customer.postalCode === newCustomer.postalCode &&
    customer.status === newCustomer.status
  ) {
    isDuplicate = true;
    break; // Stop checking once a duplicate is found
  }
}

    this.customerList.push(this.AddressForm.value);
    this.saveCustomers();
    console.log("Customer Added:", newCustomer);
    console.log("Updated Customer List:", this.customerList);


    this.AddressForm.reset();
  }
  saveCustomers() {
    localStorage.setItem('customerList', JSON.stringify(this.customerList));
  }


}