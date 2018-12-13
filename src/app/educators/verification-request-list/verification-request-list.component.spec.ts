import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationRequestListComponent } from './verification-request-list.component';

describe('VerificationRequestListComponent', () => {
  let component: VerificationRequestListComponent;
  let fixture: ComponentFixture<VerificationRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
