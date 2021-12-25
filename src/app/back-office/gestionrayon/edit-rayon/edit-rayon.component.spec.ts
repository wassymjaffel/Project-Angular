import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRayonComponent } from './edit-rayon.component';

describe('EditRayonComponent', () => {
  let component: EditRayonComponent;
  let fixture: ComponentFixture<EditRayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
