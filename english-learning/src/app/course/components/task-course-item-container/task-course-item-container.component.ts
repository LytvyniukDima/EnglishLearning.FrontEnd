import { Component, Input, OnInit } from '@angular/core';
import { TaskCourseItemModel } from '../../models/task-course-item.model';

@Component({
  selector: 'app-task-course-item-container',
  templateUrl: './task-course-item-container.component.html',
  styleUrls: ['./task-course-item-container.component.css']
})
export class TaskCourseItemContainerComponent implements OnInit {
  @Input() courseItem: TaskCourseItemModel;

  constructor() { }

  ngOnInit(): void {
  }

  getAccordionId(): string {
    const id = this.getId();
    return `accordion-${id}`;
  }

  getTargetAccordionId(): string {
    return `#${this.getAccordionId()}`;
  }

  getId(): string {
    //const id = this.courseItem.grammarPart.replaceAll(' ', '');
    const id = this.courseItem.grammarPart.split(' ').join('');
    return `item-${id}`;
  }

  getTargetId(): string {
    const id = this.getId();
    return `#${id}`;
  }

  getCompletedTasks(): number {
    return this.courseItem.completedInfo?.taskCount ?? 0;
  }

  getPercentage(): number {
    return this.courseItem.completedInfo?.correctnessPercentage ?? 0;
  }
}
