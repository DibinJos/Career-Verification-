import { TestBed, inject } from '@angular/core/testing';

import { VerificationRequestService } from './verification-request.service';

describe('VerificationRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerificationRequestService]
    });
  });

  it('should be created', inject([VerificationRequestService], (service: VerificationRequestService) => {
    expect(service).toBeTruthy();
  }));
});
