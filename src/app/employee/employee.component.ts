import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { KeyValue } from '../model/keyvalue';
import { GradeService } from '../services/grade.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  grades!:KeyValue[];
  employee:Employee = new Employee('','','',0,'');

  constructor(private _gradeService:GradeService){}

  ngOnInit(): void {
    this.grades = this._gradeService.getAllGrades();
  }


  save(value:any){
    console.log(value);

    this.employee = value;
    this.employee.gradeTitle = this.grades.find(q => q.id == this.employee.gradeId)!.title;
  }

}
