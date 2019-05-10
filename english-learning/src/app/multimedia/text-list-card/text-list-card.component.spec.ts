import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextListCardComponent } from './text-list-card.component';

describe('TextListCardComponent', () => {
  let component: TextListCardComponent;
  let fixture: ComponentFixture<TextListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
