import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EnglishTaskBracketsModel } from '../models/EnglishTaskBracketsModel';

@Component({
  selector: 'app-task-brackets-item',
  templateUrl: './task-brackets-item.component.html',
  styleUrls: ['./task-brackets-item.component.css']
})
export class TaskBracketsItemComponent implements OnInit {
  @Input() taskModel: EnglishTaskBracketsModel;
  @Output() answear = new EventEmitter<string>();
  
  isIncorrectAnswear: boolean;

  constructor() { }

  ngOnInit() {
  }

  onInputChange(event) {
    let userAnswear = event.target.value;
    this.answear.emit(userAnswear);

    if (!this.taskModel.answears.includes(userAnswear))
      this.isIncorrectAnswear = true;
    else
      this.isIncorrectAnswear = false;
  }
}
