import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDetailsContainerComponent } from './word-details-container.component';

describe('WordDetailsContainerComponent', () => {
  let component: WordDetailsContainerComponent;
  let fixture: ComponentFixture<WordDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordDetailsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
