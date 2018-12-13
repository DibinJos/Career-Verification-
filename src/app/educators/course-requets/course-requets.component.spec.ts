import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRequetsComponent } from './course-requets.component';

describe('CourseRequetsComponent', () => {
  let component: CourseRequetsComponent;
  let fixture: ComponentFixture<CourseRequetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseRequetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRequetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
