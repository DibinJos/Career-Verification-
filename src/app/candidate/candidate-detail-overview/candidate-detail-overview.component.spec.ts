import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDetailOverviewComponent } from './candidate-detail-overview.component';

describe('CandidateDetailOverviewComponent', () => {
  let component: CandidateDetailOverviewComponent;
  let fixture: ComponentFixture<CandidateDetailOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateDetailOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateDetailOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
