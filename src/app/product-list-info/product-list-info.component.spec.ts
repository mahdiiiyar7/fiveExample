import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListInfoComponent } from './product-list-info.component';

describe('ProductListInfoComponent', () => {
  let component: ProductListInfoComponent;
  let fixture: ComponentFixture<ProductListInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
