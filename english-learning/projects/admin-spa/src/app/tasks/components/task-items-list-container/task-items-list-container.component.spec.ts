import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemsListContainerComponent } from './task-items-list-container.component';

describe('TaskItemsListContainerComponent', () => {
  let component: TaskItemsListContainerComponent;
  let fixture: ComponentFixture<TaskItemsListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskItemsListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
