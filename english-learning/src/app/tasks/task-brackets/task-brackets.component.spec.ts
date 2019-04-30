import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBracketsComponent } from './task-brackets.component';

describe('TaskBracketsComponent', () => {
  let component: TaskBracketsComponent;
  let fixture: ComponentFixture<TaskBracketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskBracketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
