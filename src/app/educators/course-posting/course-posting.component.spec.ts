import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePostingComponent } from './course-posting.component';

describe('CoursePostingComponent', () => {
  let component: CoursePostingComponent;
  let fixture: ComponentFixture<CoursePostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
