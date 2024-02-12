import { TestBed } from '@angular/core/testing';

import { TotalrevenueService } from './Service/totalrevenue.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TotalrevenueService', () => {
  let service: TotalrevenueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TotalrevenueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
