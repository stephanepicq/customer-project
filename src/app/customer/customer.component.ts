import { HttpClient } from '@angular/common/http';
import { Component, Injector } from '@angular/core';
import { ParentLogger } from '../util/logger';
import { CustomerModel } from './customer.model';

@Component({
  templateUrl: './customer.component.html'
})
export class CustomerComponent {
  customerModel: CustomerModel = new CustomerModel();
  customers: Array<CustomerModel> = new Array<CustomerModel>();
  logger: ParentLogger = null;
  requestOnGoing = false;
  modelUrl: string = "http://localhost:3000/customers/";

  constructor(injector: Injector, public http: HttpClient) {
    this.logger = injector.get("logger");
    var logger2 = injector.get("logger2");
    logger2.log();
    this.getConstumers();
  }

  saveCustomer() {
    this.requestOnGoing = true;
    var customerModelDto: any = {};
    customerModelDto.id = this.customerModel.id;
    customerModelDto.code = this.customerModel.code;
    customerModelDto.name = this.customerModel.name;
    customerModelDto.value = this.customerModel.value;

    if (this.customerModel.id) {
      this.modifyCustomer(customerModelDto);
    } else {
      this.createCustomer(customerModelDto);
    }
  }

  createCustomer(customerModelDto: any) {
    this.http.post(this.modelUrl, customerModelDto).subscribe(
      res => this.success(res),
      res => this.error(res));
  }

  modifyCustomer(customerModelDto: any) {
    this.http.put(this.modelUrl + customerModelDto.id, customerModelDto).subscribe(
      res => this.success(res),
      res => this.error(res));
  }

  success(res: any) {
    this.logger.log("Data successfully sent to the database!");
    this.getConstumers();
  }

  getConstumers() {
    this.http.get(this.modelUrl).subscribe(
      res => this.successLoad(res),
      res => this.error(res));
  }

  successLoad(res: any) {
    this.customers = res;
    this.customerModel = new CustomerModel();
    this.requestOnGoing = false;
  }

  error(res: any) {
    console.debug(res);
    this.requestOnGoing = false;
  }

  selectData(_customerModel: CustomerModel) {
    this.customerModel = new CustomerModel();
    this.customerModel.id = _customerModel.id;
    this.customerModel.code = _customerModel.code;
    this.customerModel.name = _customerModel.name;
    this.customerModel.value = _customerModel.value;
  }

  deleteData(_customerModel: CustomerModel) {
    this.http.delete(this.modelUrl + _customerModel.id).subscribe(
      res => this.deleteSuccess(res),
      res => this.error(res)
    );
  }

  deleteSuccess(res: any) {
    this.getConstumers();
  }

  hasError(control: string, type: string): boolean {
    return this.customerModel.formGroup.controls[control].hasError(type);
  }

  dirty(control: string): boolean {
    return this.customerModel.formGroup.controls[control].dirty;
  }
}
