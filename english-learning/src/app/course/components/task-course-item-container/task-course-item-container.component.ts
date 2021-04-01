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

}
