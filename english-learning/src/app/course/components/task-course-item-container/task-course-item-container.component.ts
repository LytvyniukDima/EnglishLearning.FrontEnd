import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskCourseItemModel } from '../../models/task-course-item.model';

@Component({
  selector: 'app-task-course-item-container',
  templateUrl: './task-course-item-container.component.html',
  styleUrls: ['./task-course-item-container.component.css']
})
export class TaskCourseItemContainerComponent implements OnInit {
  @Input() courseItem: TaskCourseItemModel;
  @Output() trainTask = new EventEmitter<string>();

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

  getProgressBarStyle(): any {
    const percentage = this.getPercentage();
    return {
      width: `${percentage}%`
    };
  }

  getProgressBarClass(): any {
    const progressClass = this.courseItem.successRatePercentage > this.getPercentage()
      ? "bg-danger"
      : "bg-success";

    const obj = {};
    obj[progressClass] = true;
    return obj;
  };

  onTrainTask(): void {
    this.trainTask.emit(this.courseItem.grammarPart);
  }
}
