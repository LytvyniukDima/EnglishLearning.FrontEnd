import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCorrectOptionItemComponent } from './task-correct-option-item.component';

describe('TaskCorrectOptionItemComponent', () => {
  let component: TaskCorrectOptionItemComponent;
  let fixture: ComponentFixture<TaskCorrectOptionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCorrectOptionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCorrectOptionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
