import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsClientComponent } from './stats-client.component';

describe('StatsClientComponent', () => {
  let component: StatsClientComponent;
  let fixture: ComponentFixture<StatsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
