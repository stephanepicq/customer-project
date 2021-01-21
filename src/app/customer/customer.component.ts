import { Component, Injector } from '@angular/core';
import { ParentLogger } from '../logger/logger';
import { CustomerModel } from './customer.model';

@Component({
  templateUrl: './customer.component.html'
})
export class CustomerComponent {
  customerModel: CustomerModel = new CustomerModel();
  customers: Array<CustomerModel> = new Array<CustomerModel>();
  logger: ParentLogger = null;

  constructor( injector: Injector) {
    this.logger = injector.get("logger");
    var logger2 = injector.get("logger2");
    logger2.log();
  }

  add() {
    this.customers.push(this.customerModel);
    this.customerModel = new CustomerModel();
    this.logger.log();
  }

  hasError(control: string, type: string): boolean {
    return this.customerModel.formGroup.controls[control].hasError(type);
  }

  dirty(control: string): boolean {
    return this.customerModel.formGroup.controls[control].dirty;
  }
}
