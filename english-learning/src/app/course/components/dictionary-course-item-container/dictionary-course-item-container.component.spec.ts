import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryCourseItemContainerComponent } from './dictionary-course-item-container.component';

describe('DictionaryCourseItemContainerComponent', () => {
  let component: DictionaryCourseItemContainerComponent;
  let fixture: ComponentFixture<DictionaryCourseItemContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryCourseItemContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryCourseItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
