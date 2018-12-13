import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateEducationEmploymentDetailsComponent } from './candidate-education-employment-details.component';

describe('CandidateEducationEmploymentDetailsComponent', () => {
  let component: CandidateEducationEmploymentDetailsComponent;
  let fixture: ComponentFixture<CandidateEducationEmploymentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateEducationEmploymentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateEducationEmploymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
