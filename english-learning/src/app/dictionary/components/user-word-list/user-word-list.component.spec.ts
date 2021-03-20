import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWordListComponent } from './user-word-list.component';

describe('UserWordListComponent', () => {
  let component: UserWordListComponent;
  let fixture: ComponentFixture<UserWordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWordListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
