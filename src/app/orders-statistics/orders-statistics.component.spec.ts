import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersStatisticsComponent } from './orders-statistics.component';

describe('OrdersStatisticsComponent', () => {
  let component: OrdersStatisticsComponent;
  let fixture: ComponentFixture<OrdersStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
