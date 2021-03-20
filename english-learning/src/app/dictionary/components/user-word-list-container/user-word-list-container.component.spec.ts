import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWordListContainerComponent } from './user-word-list-container.component';

describe('UserWordListContainerComponent', () => {
  let component: UserWordListContainerComponent;
  let fixture: ComponentFixture<UserWordListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWordListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWordListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
