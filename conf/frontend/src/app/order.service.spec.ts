import { TestBed } from '@angular/core/testing';

import { OrderService } from './Service/order.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
