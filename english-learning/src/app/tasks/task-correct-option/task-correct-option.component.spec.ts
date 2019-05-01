import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCorrectOptionComponent } from './task-correct-option.component';

describe('TaskCorrectOptionComponent', () => {
  let component: TaskCorrectOptionComponent;
  let fixture: ComponentFixture<TaskCorrectOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCorrectOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCorrectOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
