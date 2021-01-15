import { Component } from '@angular/core';
import { CustomerModel } from './customer.model';

@Component({
  templateUrl: './customer.component.html'
})
export class CustomerComponent {
  customerModel: CustomerModel = new CustomerModel();
  customers: Array<CustomerModel> = new Array<CustomerModel>();

  add() {
    this.customers.push(this.customerModel);
    this.customerModel = new CustomerModel();
  }

  hasError(control: string, type: string): boolean {
    return this.customerModel.formGroup.controls[control].hasError(type);
  }

  dirty(control: string): boolean {
    return this.customerModel.formGroup.controls[control].dirty;
  }
}
