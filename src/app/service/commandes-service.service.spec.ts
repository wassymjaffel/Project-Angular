import { TestBed } from '@angular/core/testing';

import { CommandesServiceService } from './commandes-service.service';

describe('CommandesServiceService', () => {
  let service: CommandesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
