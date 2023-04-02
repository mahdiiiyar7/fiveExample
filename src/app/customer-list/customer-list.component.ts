import { CategoryListComponent } from './../category-list/category-list.component';
import { Component, OnInit, ViewChild , ElementRef , ViewChildren } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  addressInput:string = 'Tehran....';

  @ViewChild('firstName') firstNameInput!: ElementRef;
  @ViewChild('address') addressText!: ElementRef;

  // @ViewChildren(CategoryListComponent) categoryListView! : CategoryListComponent;

  ngOnInit(): void {
    
  }

  saveInfo():void {
    alert(this.firstNameInput.nativeElement.value);
    alert(this.addressText.nativeElement.value);
  }
}
