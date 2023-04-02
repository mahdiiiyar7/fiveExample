import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly apiURL = 'https://apitester.ir/api/Categories';

  constructor(private _http:HttpClient) { }

  getAllCategories():Observable<CategoryModel[]>{
    return this._http.get<CategoryModel[]>(this.apiURL);
  };
}
