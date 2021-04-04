import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryTaskComponent } from './dictionary-task.component';

describe('DictionaryTaskComponent', () => {
  let component: DictionaryTaskComponent;
  let fixture: ComponentFixture<DictionaryTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
