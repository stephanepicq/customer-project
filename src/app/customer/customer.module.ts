import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConsoleLogger, DBLogger } from '../logger/logger';
import { customerRoute } from '../routing/customer-routing';
import { CustomerComponent } from './customer.component';

var providerList: any = [];
providerList.push({provide: "logger", useClass: ConsoleLogger});
providerList.push({provide: "logger2", useClass: DBLogger});

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(customerRoute)
  ],
  providers: [providerList],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
