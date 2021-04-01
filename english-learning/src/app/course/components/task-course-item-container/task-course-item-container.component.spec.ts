import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCourseItemContainerComponent } from './task-course-item-container.component';

describe('TaskCourseItemContainerComponent', () => {
  let component: TaskCourseItemContainerComponent;
  let fixture: ComponentFixture<TaskCourseItemContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCourseItemContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCourseItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
