import { TestBed } from '@angular/core/testing';

import { PatientRegServiceService } from './patient-reg-service.service';

describe('PatientRegServiceService', () => {
  let service: PatientRegServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientRegServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
