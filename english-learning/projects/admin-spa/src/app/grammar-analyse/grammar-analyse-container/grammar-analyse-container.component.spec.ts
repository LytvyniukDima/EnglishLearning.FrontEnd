import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarAnalyseContainerComponent } from './grammar-analyse-container.component';

describe('GrammarAnalyseContainerComponent', () => {
  let component: GrammarAnalyseContainerComponent;
  let fixture: ComponentFixture<GrammarAnalyseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrammarAnalyseContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarAnalyseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
