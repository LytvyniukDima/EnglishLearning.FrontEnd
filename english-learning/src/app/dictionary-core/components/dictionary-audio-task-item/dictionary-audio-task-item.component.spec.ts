import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryAudioTaskItemComponent } from './dictionary-audio-task-item.component';

describe('DictionaryAudioTaskItemComponent', () => {
  let component: DictionaryAudioTaskItemComponent;
  let fixture: ComponentFixture<DictionaryAudioTaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryAudioTaskItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryAudioTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
