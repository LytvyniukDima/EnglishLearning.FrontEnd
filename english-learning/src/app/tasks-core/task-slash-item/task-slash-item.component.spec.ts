import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSlashItemComponent } from './task-slash-item.component';

describe('TaskSlashItemComponent', () => {
  let component: TaskSlashItemComponent;
  let fixture: ComponentFixture<TaskSlashItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSlashItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSlashItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
