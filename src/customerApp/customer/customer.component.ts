import { Component } from '@angular/core';
import { CustomerModel } from './customer.model';

@Component({
  templateUrl: './customer.view.html'
})
export class CustomerComponent {
  title = 'CustomerApplication';
  customerModel: CustomerModel = new CustomerModel();
  customerModels: Array<CustomerModel> = new Array<CustomerModel>();

  Add() {
    this.customerModels.push(this.customerModel);
    this.customerModel = new CustomerModel();
  }
}
