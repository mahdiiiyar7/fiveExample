import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-employee-react-form',
  templateUrl: './employee-react-form.component.html',
  styleUrls: ['./employee-react-form.component.scss']
})
export class EmployeeReactFormComponent implements OnInit{

  customerForm!:FormGroup;

  constructor(private _formBiulder:FormBuilder){}


  // ngOnInit(): void {
  //   this.customerForm = new FormGroup({
  //     firstName: new FormControl('' , [Validators.required]),
  //     lastName: new FormControl('' , [Validators.required , Validators.minLength(3) , Validators.maxLength(30)]),
  //     email: new FormControl('' , [Validators.required , Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')])
  //   })
  // }

  initAddressList(){
    return this._formBiulder.group({
      type: [''],
      address: ['']
    });
  };



  ngOnInit(): void {
    this.customerForm = this._formBiulder.group({
      firstName: ['' , Validators.required],
      lastName: ['' , [Validators.required , Validators.minLength(3) , Validators.maxLength(30)]],
      email: ['' , [Validators.required , Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]],
      accountInfoForm: this._formBiulder.group({
        accountTitle: ['' , Validators.required],
        accountNumber: ['' , Validators.required],
        shebaNumber: ['' , Validators.required]
      }),
      addressList: this._formBiulder.array([this.initAddressList()])
    })
  }

  get accountInfoForm(){
    return this.customerForm.get('accountInfoForm');
  }

  get addressList(){
    return this.customerForm.get('addressList') as FormArray;
  }


  save():void {
    alert('Your data Saved');
    console.log(this.customerForm.value);
    console.log(this.customerForm.get('firstName')!.value)
  }

  addAddressList(event:Event){
    event.preventDefault();
    this.addressList.push(this.initAddressList());
  }


  removeAddressList(event:Event , index:any){
    event.preventDefault();
    this.addressList.removeAt(index);
  }


}
