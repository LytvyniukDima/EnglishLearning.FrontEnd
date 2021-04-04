import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAudioItemComponent } from './task-audio-item.component';

describe('TaskAudioItemComponent', () => {
  let component: TaskAudioItemComponent;
  let fixture: ComponentFixture<TaskAudioItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAudioItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAudioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
