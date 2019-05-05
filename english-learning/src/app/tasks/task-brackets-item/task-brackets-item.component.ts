import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EnglishTaskBracketsModel } from '../models/EnglishTaskBracketsModel';

@Component({
  selector: 'app-task-brackets-item',
  templateUrl: './task-brackets-item.component.html',
  styleUrls: ['./task-brackets-item.component.css']
})
export class TaskBracketsItemComponent implements OnInit {
  @Input() taskModel: EnglishTaskBracketsModel;
  @Output() answer = new EventEmitter<string>();
  
  isIncorrectAnswer: boolean;

  constructor() { }

  ngOnInit() {
  }

  onInputChange(event) {
    let userAnswer = event.target.value;
    this.answer.emit(userAnswer);

    if (!this.taskModel.answers.includes(userAnswer))
      this.isIncorrectAnswer = true;
    else
      this.isIncorrectAnswer = false;
  }
}
