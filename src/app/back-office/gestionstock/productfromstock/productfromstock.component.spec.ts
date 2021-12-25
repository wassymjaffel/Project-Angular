import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfromstockComponent } from './productfromstock.component';

describe('ProductfromstockComponent', () => {
  let component: ProductfromstockComponent;
  let fixture: ComponentFixture<ProductfromstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductfromstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductfromstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
