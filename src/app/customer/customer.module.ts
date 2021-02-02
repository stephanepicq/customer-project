import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { customerRoute } from '../routing/customer-routing';
import { GridTableComponent } from '../util/grid.component';
import { MyHttpInterceptor } from '../util/http.interceptor';
import { ConsoleLogger, DBLogger } from '../util/logger';
import { CustomerComponent } from './customer.component';

var providerList: any = [];
providerList.push({provide: "logger", useClass: ConsoleLogger});
providerList.push({provide: "logger2", useClass: DBLogger});
providerList.push({provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true});

@NgModule({
  declarations: [
    CustomerComponent, GridTableComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forChild(customerRoute)
  ],
  providers: [providerList],
  bootstrap: [CustomerComponent]
})  
export class CustomerModule { }
