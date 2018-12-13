import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCandidateDetailsComponent } from './upload-candidate-details.component';

describe('UploadCandidateDetailsComponent', () => {
  let component: UploadCandidateDetailsComponent;
  let fixture: ComponentFixture<UploadCandidateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCandidateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCandidateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
