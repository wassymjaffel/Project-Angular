import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRayonComponent } from './detail-rayon.component';

describe('DetailRayonComponent', () => {
  let component: DetailRayonComponent;
  let fixture: ComponentFixture<DetailRayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
