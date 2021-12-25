import { TestBed } from '@angular/core/testing';

import { StockserviceService } from './stockservice.service';

describe('StockserviceService', () => {
  let service: StockserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
