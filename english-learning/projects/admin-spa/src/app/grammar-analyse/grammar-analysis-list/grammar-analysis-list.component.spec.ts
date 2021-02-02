import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarAnalysisListComponent } from './grammar-analysis-list.component';

describe('GrammarAnalysisListComponent', () => {
  let component: GrammarAnalysisListComponent;
  let fixture: ComponentFixture<GrammarAnalysisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrammarAnalysisListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarAnalysisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
