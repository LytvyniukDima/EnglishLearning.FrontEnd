import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryAudioTaskContainerComponent } from './dictionary-audio-task-container.component';

describe('DictionaryAudioTaskContainerComponent', () => {
  let component: DictionaryAudioTaskContainerComponent;
  let fixture: ComponentFixture<DictionaryAudioTaskContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryAudioTaskContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryAudioTaskContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
