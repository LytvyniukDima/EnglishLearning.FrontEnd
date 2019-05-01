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
  @Output() answears = new EventEmitter<number[]>();
  
  choosedValues: number[];
  isIncorrectAnswears: boolean[];

  constructor() { }

  ngOnInit() {
    this.choosedValues = new Array(this.taskModel.items.length);
    this.isIncorrectAnswears = new Array(this.taskModel.items.length);
  }

  selectOption(option: string, index: number) {
    let numberOption = parseInt(option);
    this.choosedValues[index] = numberOption;
    this.answears.emit(this.choosedValues);

    if (this.taskModel.answears[index] !== numberOption) {
      this.isIncorrectAnswears[index] = true;
    } else {
      this.isIncorrectAnswears[index] = false;
    }
  }
}
