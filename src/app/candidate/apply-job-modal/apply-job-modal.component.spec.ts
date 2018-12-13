import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyJobModalComponent } from './apply-job-modal.component';

describe('ApplyJobModalComponent', () => {
  let component: ApplyJobModalComponent;
  let fixture: ComponentFixture<ApplyJobModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyJobModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyJobModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
