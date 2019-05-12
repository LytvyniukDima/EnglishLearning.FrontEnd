import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedStatisticItemComponent } from './completed-statistic-item.component';

describe('CompletedStatisticItemComponent', () => {
  let component: CompletedStatisticItemComponent;
  let fixture: ComponentFixture<CompletedStatisticItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedStatisticItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedStatisticItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
