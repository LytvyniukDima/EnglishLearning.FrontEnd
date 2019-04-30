import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListCardComponent } from './tasks-list-card.component';

describe('TasksListCardComponent', () => {
  let component: TasksListCardComponent;
  let fixture: ComponentFixture<TasksListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
