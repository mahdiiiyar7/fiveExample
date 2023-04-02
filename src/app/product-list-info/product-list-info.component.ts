import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list-info',
  templateUrl: './product-list-info.component.html',
  styleUrls: ['./product-list-info.component.scss']
})
export class ProductListInfoComponent implements OnInit{

  productId : number = 0;
  productTitle:string = "";

  constructor(private _route:ActivatedRoute , private _back:Router , private _location:Location){}

  ngOnInit(): void {

    if(this._route.snapshot.params['id']){
      this.productId = this._route.snapshot.params['id'];
    }

    this._route.queryParams.subscribe(params => {
      this.productId = params['id'];
      this.productTitle = params['title'];
    })

  }


  goToBackRouter():void{
    this._back.navigate(["/products"]);
  }

  goToBackLocation():void {
    this._location.back();
  }


}
