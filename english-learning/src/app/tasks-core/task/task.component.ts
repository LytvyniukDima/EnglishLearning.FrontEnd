import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CompletedEnglishTaskCreationModel } from '../models/CompletedEnglishTaskCreationModel';
import { EnglishTaskModel } from '../models/EnglishTaskModel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: EnglishTaskModel;
  @Output() completedTask = new EventEmitter<CompletedEnglishTaskCreationModel>();

  constructor() { }

  ngOnInit() {
  }

  onTaskCompleted(completedTask: CompletedEnglishTaskCreationModel): void {
    this.completedTask.emit(completedTask);
  }
}
