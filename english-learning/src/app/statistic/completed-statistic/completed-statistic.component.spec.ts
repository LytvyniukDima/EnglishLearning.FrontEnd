import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedStatisticComponent } from './completed-statistic.component';

describe('CompletedStatisticComponent', () => {
  let component: CompletedStatisticComponent;
  let fixture: ComponentFixture<CompletedStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
