import { TestBed } from '@angular/core/testing';

import { SlotsServiceService } from './slots-service.service';

describe('SlotsServiceService', () => {
  let service: SlotsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlotsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
