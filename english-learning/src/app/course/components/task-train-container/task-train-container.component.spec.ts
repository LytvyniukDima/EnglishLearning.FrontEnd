import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTrainContainerComponent } from './task-train-container.component';

describe('TaskTrainContainerComponent', () => {
  let component: TaskTrainContainerComponent;
  let fixture: ComponentFixture<TaskTrainContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTrainContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTrainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
