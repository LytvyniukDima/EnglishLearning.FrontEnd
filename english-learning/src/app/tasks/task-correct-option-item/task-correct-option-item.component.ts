import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EnglishTaskCorrectOptionModel } from '../models/EnglishTaskCorrectOptionModel';

@Component({
  selector: 'app-task-correct-option-item',
  templateUrl: './task-correct-option-item.component.html',
  styleUrls: ['./task-correct-option-item.component.css']
})
export class TaskCorrectOptionItemComponent implements OnInit {
  @Input() taskModel: EnglishTaskCorrectOptionModel;
  @Input() modelIndex: number;
  @Output() answer = new EventEmitter<number>();
  
  choosedValue: number;
  isIncorrectAnswer: boolean;

  constructor() { }

  ngOnInit() {
  }

  handleChange(event, i) {
    var target = event.target;
      if (target.checked) {
        let answer = parseInt(i);
        this.answer.emit(answer);

        if (answer != this.taskModel.answer)
          this.isIncorrectAnswer = true;
        else
          this.isIncorrectAnswer = false;
      }
  }
}
