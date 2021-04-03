import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSlashComponent } from './task-slash.component';

describe('TaskSlashComponent', () => {
  let component: TaskSlashComponent;
  let fixture: ComponentFixture<TaskSlashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSlashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
