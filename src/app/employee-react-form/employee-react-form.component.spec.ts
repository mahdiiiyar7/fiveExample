import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReactFormComponent } from './employee-react-form.component';

describe('EmployeeReactFormComponent', () => {
  let component: EmployeeReactFormComponent;
  let fixture: ComponentFixture<EmployeeReactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeReactFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeReactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
