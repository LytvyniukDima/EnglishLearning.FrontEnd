import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksCorrectnessStatisticComponent } from './tasks-correctness-statistic.component';

describe('TasksCorrectnessStatisticComponent', () => {
  let component: TasksCorrectnessStatisticComponent;
  let fixture: ComponentFixture<TasksCorrectnessStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksCorrectnessStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksCorrectnessStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
