import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAudioComponent } from './task-audio.component';

describe('TaskAudioComponent', () => {
  let component: TaskAudioComponent;
  let fixture: ComponentFixture<TaskAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
