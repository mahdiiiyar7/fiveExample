import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail-list',
  templateUrl: './product-detail-list.component.html',
  styleUrls: ['./product-detail-list.component.scss']
})
export class ProductDetailListComponent implements OnInit{

  @Input() mahdiyar:any;
  @Output() removeItem = new EventEmitter();

  ngOnInit(): void {
    
  }

  remove(id:number):void {
    this.removeItem.emit(id);
  }
}
