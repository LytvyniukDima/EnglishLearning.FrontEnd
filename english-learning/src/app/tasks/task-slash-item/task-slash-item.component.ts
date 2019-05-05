import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EnglishTaskSlashItem } from '../models/EnglishTaskSlashItem';
import { EnglishTaskSlashModel } from '../models/EnglishTaskSlashModel';

@Component({
  selector: 'app-task-slash-item',
  templateUrl: './task-slash-item.component.html',
  styleUrls: ['./task-slash-item.component.css']
})
export class TaskSlashItemComponent implements OnInit {
  @Input() taskModel: EnglishTaskSlashModel;
  @Output() answers = new EventEmitter<number[]>();
  
  choosedValues: number[];
  isIncorrectAnswers: boolean[];

  constructor() { }

  ngOnInit() {
    this.choosedValues = new Array(this.taskModel.items.length);
    this.isIncorrectAnswers = new Array(this.taskModel.items.length);
  }

  selectOption(option: string, index: number) {
    let numberOption = parseInt(option);
    this.choosedValues[index] = numberOption;
    this.answers.emit(this.choosedValues);

    if (this.taskModel.answers[index] !== numberOption) {
      this.isIncorrectAnswers[index] = true;
    } else {
      this.isIncorrectAnswers[index] = false;
    }
  }
}
