import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaLevelStatisticComponent } from './multimedia-level-statistic.component';

describe('MultimediaLevelStatisticComponent', () => {
  let component: MultimediaLevelStatisticComponent;
  let fixture: ComponentFixture<MultimediaLevelStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaLevelStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaLevelStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
