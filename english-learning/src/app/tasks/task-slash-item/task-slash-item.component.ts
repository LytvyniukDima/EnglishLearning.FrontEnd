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
  
  constructor() { }

  ngOnInit() {
    this.choosedValues = new Array(this.taskModel.items.length);
  }

  selectOption(option: string, index: number) {
    this.choosedValues[index] = parseInt(option);
    this.answears.emit(this.choosedValues);
  }
}
