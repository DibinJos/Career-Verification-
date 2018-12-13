import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationCanditateDetailsComponent } from './certification-canditate-details.component';

describe('CertificationCanditateDetailsComponent', () => {
  let component: CertificationCanditateDetailsComponent;
  let fixture: ComponentFixture<CertificationCanditateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationCanditateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationCanditateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
