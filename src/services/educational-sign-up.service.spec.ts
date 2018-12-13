import { TestBed, inject } from '@angular/core/testing';

import { EducationalSignUpService } from './educational-sign-up.service';

describe('EducationalSignUpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EducationalSignUpService]
    });
  });

  it('should be created', inject([EducationalSignUpService], (service: EducationalSignUpService) => {
    expect(service).toBeTruthy();
  }));
});
