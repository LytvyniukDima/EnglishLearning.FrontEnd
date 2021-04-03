import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBracketsItemComponent } from './task-brackets-item.component';

describe('TaskBracketsItemComponent', () => {
  let component: TaskBracketsItemComponent;
  let fixture: ComponentFixture<TaskBracketsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskBracketsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBracketsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
