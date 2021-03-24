import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtoCourseComponent } from './proto-course.component';

describe('ProtoCourseComponent', () => {
  let component: ProtoCourseComponent;
  let fixture: ComponentFixture<ProtoCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtoCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtoCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
