import { TestBed, inject } from '@angular/core/testing';

import { FileUploadDownloadService } from './file-upload-download.service';

describe('FileUploadDownloadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileUploadDownloadService]
    });
  });

  it('should be created', inject([FileUploadDownloadService], (service: FileUploadDownloadService) => {
    expect(service).toBeTruthy();
  }));
});
