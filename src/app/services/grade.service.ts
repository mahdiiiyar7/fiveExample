import { Injectable } from '@angular/core';
import { KeyValue } from '../model/keyvalue';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  grades:KeyValue[] = [
    new KeyValue(1,'kardani'),
    new KeyValue(2,'karshenasi'),
    new KeyValue(3,'karshenasi arshad'),
    new KeyValue(4,'Doctora'),
    new KeyValue(5,'Proffessor')
  ]

  constructor() { }

  getAllGrades():KeyValue[]{
    return this.grades;
  }

  
}
