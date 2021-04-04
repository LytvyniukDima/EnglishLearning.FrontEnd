import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryTextTaskItemComponent } from './dictionary-text-task-item.component';

describe('DictionaryTextTaskItemComponent', () => {
  let component: DictionaryTextTaskItemComponent;
  let fixture: ComponentFixture<DictionaryTextTaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryTextTaskItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryTextTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
