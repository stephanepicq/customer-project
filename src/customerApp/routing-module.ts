import { Routes } from "@angular/router";
import { CustomerComponent } from "./customer/customer.component";
import { HomeComponent } from "./home/home.component";
import { SupplierComponent } from "./supplier/supplier.component";

export const routes : Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'supplier', component: SupplierComponent }
]