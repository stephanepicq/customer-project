import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { supplierRoute } from '../routing/supplier-routing';
import { SupplierComponent } from './supplier.component';

@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(supplierRoute)
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
