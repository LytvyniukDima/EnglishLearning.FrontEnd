import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemsTreeComponent } from './task-items-tree.component';

describe('TaskItemsTreeComponent', () => {
  let component: TaskItemsTreeComponent;
  let fixture: ComponentFixture<TaskItemsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskItemsTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
