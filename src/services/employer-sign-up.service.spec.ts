import { TestBed, inject } from '@angular/core/testing';

import { EmployerSignUpService } from './employer-sign-up.service';

describe('EmployerSignUpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployerSignUpService]
    });
  });

  it('should be created', inject([EmployerSignUpService], (service: EmployerSignUpService) => {
    expect(service).toBeTruthy();
  }));
});
