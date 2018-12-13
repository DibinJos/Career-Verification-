import { TestBed, inject } from '@angular/core/testing';

import { CoursePostingService } from './course-posting.service';

describe('CoursePostingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursePostingService]
    });
  });

  it('should be created', inject([CoursePostingService], (service: CoursePostingService) => {
    expect(service).toBeTruthy();
  }));
});
