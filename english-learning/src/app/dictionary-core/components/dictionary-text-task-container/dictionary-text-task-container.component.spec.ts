import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryTextTaskContainerComponent } from './dictionary-text-task-container.component';

describe('DictionaryTextTaskContainerComponent', () => {
  let component: DictionaryTextTaskContainerComponent;
  let fixture: ComponentFixture<DictionaryTextTaskContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryTextTaskContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryTextTaskContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
