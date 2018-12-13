import { TestBed, inject } from '@angular/core/testing';

import { JobRequestService } from './job-request.service';

describe('JobRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobRequestService]
    });
  });

  it('should be created', inject([JobRequestService], (service: JobRequestService) => {
    expect(service).toBeTruthy();
  }));
});
