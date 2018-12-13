import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerApplicantDetailsComponent } from './employer-applicant-details.component';

describe('EmployerApplicantDetailsComponent', () => {
  let component: EmployerApplicantDetailsComponent;
  let fixture: ComponentFixture<EmployerApplicantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerApplicantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerApplicantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
