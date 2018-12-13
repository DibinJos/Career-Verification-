import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadEmployeeDetailsComponent } from './upload-employee-details.component';

describe('UploadEmployeeDetailsComponent', () => {
  let component: UploadEmployeeDetailsComponent;
  let fixture: ComponentFixture<UploadEmployeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadEmployeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
