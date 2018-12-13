import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertAuthorityComponent } from './cert-authority.component';

describe('CertAuthorityComponent', () => {
  let component: CertAuthorityComponent;
  let fixture: ComponentFixture<CertAuthorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertAuthorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertAuthorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
