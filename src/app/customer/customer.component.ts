import { Component } from '@angular/core';
import { CustomerModel } from './customer.model';

@Component({
  templateUrl: './customer.component.html'
})
export class CustomerComponent {
  customer: CustomerModel = new CustomerModel();
  customers: Array<CustomerModel> = new Array<CustomerModel>();

  Add() {
    this.customers.push(this.customer);
    this.customer = new CustomerModel();
  }
}
