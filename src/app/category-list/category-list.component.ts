import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../model/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit{

  categoryList!:CategoryModel[];

  categoryListFromService!:CategoryModel[];
  

  constructor(private _http:HttpClient , private _categoryService:CategoryService){}

  ngOnInit(): void {
    const apiURL = 'https://apitester.ir/api/Categories';
    this._http.get<CategoryModel[]>(apiURL).subscribe(resualt => this.categoryList = resualt);

    this._categoryService.getAllCategories().subscribe(data => this.categoryListFromService = data);
  }

}
