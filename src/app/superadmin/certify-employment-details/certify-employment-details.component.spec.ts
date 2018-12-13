import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifyEmploymentDetailsComponent } from './certify-employment-details.component';

describe('CertifyEmploymentDetailsComponent', () => {
  let component: CertifyEmploymentDetailsComponent;
  let fixture: ComponentFixture<CertifyEmploymentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifyEmploymentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifyEmploymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
