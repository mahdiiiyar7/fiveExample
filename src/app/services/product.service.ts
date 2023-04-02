import { Injectable } from '@angular/core';
import { ProductsListModel } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // محصولات با استفاده از کلاس:

  // products:ProductsListModel[] = [
  //   new ProductsListModel(1 , 'Mobile'),
  //   new ProductsListModel(2 , 'Tablet'),
  //   new ProductsListModel(3 , 'TV'),
  //   new ProductsListModel(4 , 'LapTop')
  // ];

// محصولات با استفاده از interface:

  products:ProductsListModel[] = [
    {id:1 , title: 'Mobile'},
    {id:2 , title: 'Tablet'},
    {id:3 , title: 'TV'},
    {id:4 , title: 'LapTop'}
  ]


  constructor() { }


  getAll():ProductsListModel[]{
    return this.products;
  };

  getFind(id:number):void{
    this.products.find(q => q.id == id)
  }

  add(model:ProductsListModel):void {
    this.products.push(model);
  }

  remove(id:number):void {
    this.products = this.products.filter(q => q.id != id);
  }

  edit(model:ProductsListModel):void{
    const index = this.products.findIndex(q => q.id == model.id);
    this.products[index] = model;
  }


}


