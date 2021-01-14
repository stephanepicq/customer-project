import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";

export const mainRoute: Routes = [
  { path: "Home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "Customer", loadChildren: "../customer/customer.module#CustomerModule" },
  { path: "Supplier", loadChildren: "../supplier/supplier.module#SupplierModule" }
]