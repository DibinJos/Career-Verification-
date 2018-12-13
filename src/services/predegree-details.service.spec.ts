import { TestBed, inject } from '@angular/core/testing';

import { PredegreeDetailsService } from './predegree-details.service';

describe('PredegreeDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PredegreeDetailsService]
    });
  });

  it('should be created', inject([PredegreeDetailsService], (service: PredegreeDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
