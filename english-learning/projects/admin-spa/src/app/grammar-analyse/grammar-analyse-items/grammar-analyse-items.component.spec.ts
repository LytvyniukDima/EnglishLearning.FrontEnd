import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarAnalyseItemsComponent } from './grammar-analyse-items.component';

describe('GrammarAnalyseItemsComponent', () => {
  let component: GrammarAnalyseItemsComponent;
  let fixture: ComponentFixture<GrammarAnalyseItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrammarAnalyseItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarAnalyseItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
