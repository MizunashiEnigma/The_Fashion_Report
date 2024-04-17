import { TestBed } from '@angular/core/testing';

import { FashionserviceService } from './fashionservice.service';

describe('FashionserviceService', () => {
  let service: FashionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FashionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
