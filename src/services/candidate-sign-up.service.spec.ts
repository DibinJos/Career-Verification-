import { TestBed, inject } from '@angular/core/testing';

import { CandidateSignUpService } from './candidate-sign-up.service';

describe('CandidateSignUpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidateSignUpService]
    });
  });

  it('should be created', inject([CandidateSignUpService], (service: CandidateSignUpService) => {
    expect(service).toBeTruthy();
  }));
});
