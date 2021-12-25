import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfromrayonComponent } from './productfromrayon.component';

describe('ProductfromrayonComponent', () => {
  let component: ProductfromrayonComponent;
  let fixture: ComponentFixture<ProductfromrayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductfromrayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductfromrayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
