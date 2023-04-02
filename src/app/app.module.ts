import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListInfoComponent } from './product-list-info/product-list-info.component';
import { CategoryFeatureComponent } from './category-list/category-feature/category-feature.component';
import { CategoryColorsComponent } from './category-list/category-colors/category-colors.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailListComponent } from './product-detail-list/product-detail-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeReactFormComponent } from './employee-react-form/employee-react-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    CategoryListComponent,
    ProductListInfoComponent,
    CategoryFeatureComponent,
    CategoryColorsComponent,
    NotFoundComponent,
    ProductDetailListComponent,
    CustomerListComponent,
    EmployeeComponent,
    EmployeeReactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
