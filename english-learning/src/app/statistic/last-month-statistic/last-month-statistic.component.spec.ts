import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMonthStatisticComponent } from './last-month-statistic.component';

describe('LastMonthStatisticComponent', () => {
  let component: LastMonthStatisticComponent;
  let fixture: ComponentFixture<LastMonthStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastMonthStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMonthStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
