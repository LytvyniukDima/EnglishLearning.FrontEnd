import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicListContainerComponent } from './topic-list-container.component';

describe('TopicListContainerComponent', () => {
  let component: TopicListContainerComponent;
  let fixture: ComponentFixture<TopicListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
