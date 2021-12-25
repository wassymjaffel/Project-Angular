import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayonInterfaceComponent } from './rayon-interface.component';

describe('RayonInterfaceComponent', () => {
  let component: RayonInterfaceComponent;
  let fixture: ComponentFixture<RayonInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RayonInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RayonInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
