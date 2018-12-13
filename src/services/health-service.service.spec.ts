import { TestBed, inject } from '@angular/core/testing';

import { HealthServiceService } from './health-service.service';

describe('HealthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthServiceService]
    });
  });

  it('should be created', inject([HealthServiceService], (service: HealthServiceService) => {
    expect(service).toBeTruthy();
  }));
});
