import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCourseModalComponent } from './apply-course-modal.component';

describe('ApplyCourseModalComponent', () => {
  let component: ApplyCourseModalComponent;
  let fixture: ComponentFixture<ApplyCourseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyCourseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyCourseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
