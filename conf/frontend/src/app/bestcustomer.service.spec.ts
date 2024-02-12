import { TestBed } from '@angular/core/testing';

import { BestcustomerService } from './Service/bestcustomer.service';

describe('BestcustomerService', () => {
  let service: BestcustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestcustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
