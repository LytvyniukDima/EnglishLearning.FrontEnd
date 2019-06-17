import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksLevelStatisticComponent } from './tasks-level-statistic.component';

describe('TasksLevelStatisticComponent', () => {
  let component: TasksLevelStatisticComponent;
  let fixture: ComponentFixture<TasksLevelStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksLevelStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksLevelStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
