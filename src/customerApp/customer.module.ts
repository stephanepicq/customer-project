import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './home/main.component';
import { HomeComponent } from './home/home.component';
import { SupplierComponent } from './supplier/supplier.component';
import { RouterModule } from '@angular/router';
import { routes } from './routing-module';

@NgModule({
  declarations: [
    MainComponent, HomeComponent, CustomerComponent, SupplierComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class CustomerModule { }
