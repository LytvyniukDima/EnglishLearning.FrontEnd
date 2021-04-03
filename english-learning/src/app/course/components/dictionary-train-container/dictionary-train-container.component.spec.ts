import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryTrainContainerComponent } from './dictionary-train-container.component';

describe('DictionaryTrainContainerComponent', () => {
  let component: DictionaryTrainContainerComponent;
  let fixture: ComponentFixture<DictionaryTrainContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryTrainContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryTrainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
