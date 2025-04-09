import { Component } from '@angular/core';

@Component({
  selector: 'app-newform',
  standalone: false,
  templateUrl: './newform.component.html',
  styleUrl: './newform.component.css'
})
export class NewformComponent {

address: {
  customerName: string,
  address: string,
  city: string,
  state: string,
  country: string,
  region: string,
  postalCode: string,
  status: string
} = {
  customerName: '',
  address: '',
  city: '',
  state: '',
  country: '',
  region: '',
  postalCode: '',
  status: 'Active'
};


addresses: Array<{
  customerName: string,
  address: string,
  city: string,
  state: string,
  country: string,
  region: string,
  postalCode: string,
  status: string
}> = [];

onSubmit(form: { valid: any; resetForm: () => void; }) {
  if (form.valid) {
    this.addresses.push({ ...this.address });
    console.log(this.address);
    form.resetForm();
    this.address.status = 'Active'; 
  }
}

resetForm(form: { resetForm: () => void; }) {
  form.resetForm();
  this.address.status = 'Active'; 
}
}
