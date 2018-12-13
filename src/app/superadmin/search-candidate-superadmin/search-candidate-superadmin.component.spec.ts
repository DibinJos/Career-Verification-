import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCandidateSuperadminComponent } from './search-candidate-superadmin.component';

describe('SearchCandidateSuperadminComponent', () => {
  let component: SearchCandidateSuperadminComponent;
  let fixture: ComponentFixture<SearchCandidateSuperadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCandidateSuperadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCandidateSuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
