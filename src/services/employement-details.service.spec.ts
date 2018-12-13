import { TestBed, inject } from '@angular/core/testing';

import { EmployementDetailsService } from './employement-details.service';

describe('EmployementDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployementDetailsService]
    });
  });

  it('should be created', inject([EmployementDetailsService], (service: EmployementDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
