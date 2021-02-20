import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemsGenerationFormComponent } from './task-items-generation-form.component';

describe('TaskItemsGenerationFormComponent', () => {
  let component: TaskItemsGenerationFormComponent;
  let fixture: ComponentFixture<TaskItemsGenerationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskItemsGenerationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemsGenerationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
