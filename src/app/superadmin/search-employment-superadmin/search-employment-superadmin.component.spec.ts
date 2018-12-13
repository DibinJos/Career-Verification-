import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmploymentSuperadminComponent } from './search-employment-superadmin.component';

describe('SearchEmploymentSuperadminComponent', () => {
  let component: SearchEmploymentSuperadminComponent;
  let fixture: ComponentFixture<SearchEmploymentSuperadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEmploymentSuperadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEmploymentSuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
