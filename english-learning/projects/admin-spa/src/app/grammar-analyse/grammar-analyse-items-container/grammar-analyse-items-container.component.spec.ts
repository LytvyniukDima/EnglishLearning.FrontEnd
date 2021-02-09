import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarAnalyseItemsContainerComponent } from './grammar-analyse-items-container.component';

describe('GrammarAnalyseItemsContainerComponent', () => {
  let component: GrammarAnalyseItemsContainerComponent;
  let fixture: ComponentFixture<GrammarAnalyseItemsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrammarAnalyseItemsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarAnalyseItemsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
