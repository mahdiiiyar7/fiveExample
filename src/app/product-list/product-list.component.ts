import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsListModel } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // products = [{id: 1 , title: 'Product A'} , {id: 2 , title: 'Product B'} , {id: 3 , title: 'Product C'}];

  products!:ProductsListModel[];

  constructor(private _route : Router , private _productsService: ProductService){}

  ngOnInit(): void {
    this.products = this._productsService.getAll();
  }

  removeProductId(id:number):void {
    this.products = this.products.filter(product => product.id != id);
  }


  // goToViewInfo():void {
  //   this._route.navigate(["/products/info"] , {queryParams :{id: item.id , title: item.title }})
  // }
}
