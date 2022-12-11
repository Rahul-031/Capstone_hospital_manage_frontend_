import { TestBed } from '@angular/core/testing';

import { DoctorRegistrationServiceService } from './doctor-registration-service.service';

describe('DoctorRegistrationServiceService', () => {
  let service: DoctorRegistrationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorRegistrationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
