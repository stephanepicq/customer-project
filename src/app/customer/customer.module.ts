import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { customerRoute } from '../routing/customer-routing';
import { CustomerComponent } from './customer.component';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(customerRoute)
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
