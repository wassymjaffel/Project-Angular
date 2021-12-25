import { TestBed } from '@angular/core/testing';

import { RayonserviceService } from './rayonservice.service';

describe('RayonserviceService', () => {
  let service: RayonserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RayonserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
