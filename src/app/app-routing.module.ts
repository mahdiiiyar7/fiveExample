import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryColorsComponent } from './category-list/category-colors/category-colors.component';
import { CategoryFeatureComponent } from './category-list/category-feature/category-feature.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { EmployeeReactFormComponent } from './employee-react-form/employee-react-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListInfoComponent } from './product-list-info/product-list-info.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'products' , component: ProductListComponent},
  {path: 'products/:id' , component: ProductListInfoComponent},
  {path: 'products/info' , component: ProductListInfoComponent},
  {path: 'categories' , component: CategoryListComponent , children: [
    {path: 'feature' , component: CategoryFeatureComponent},
    {path: 'colors' , component: CategoryColorsComponent},
    {path: '' , redirectTo: 'feature' , pathMatch: 'full'}
  ]},
  {path: 'customer/info' , component: CustomerListComponent},
  {path: 'employee/info' , component: EmployeeComponent},
  {path: 'employeereactform/info' , component: EmployeeReactFormComponent},
  {path: '**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
