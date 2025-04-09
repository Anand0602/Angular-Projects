import { Component } from '@angular/core';

@Component({
  selector: 'app-addressform',
  standalone: false,
  templateUrl: './addressform.component.html',
  styleUrl: './addressform.component.css'
})
export class AddressformComponent {
  addressForm = {
    customerName: '',
    address: '',
    city: '',
    state: '',
    country: '',
    region: '',
    postalCode: '',
    status: 'Active'
  };
address: any;
city: any;
state: any;
country: any;
region: any;
postalCode: any;

  onSubmit() {
    console.log('Form Data:', this.addressForm);
  }

  onReset() {
    this.addressForm = {
      customerName: '',
      address: '',
      city: '',
      state: '',
      country: '',
      region: '',
      postalCode: '',
      status: 'Active'
    };
  }

}
