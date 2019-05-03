import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EnglishTaskCorrectOptionModel } from '../models/EnglishTaskCorrectOptionModel';

@Component({
  selector: 'app-task-correct-option-item',
  templateUrl: './task-correct-option-item.component.html',
  styleUrls: ['./task-correct-option-item.component.css']
})
export class TaskCorrectOptionItemComponent implements OnInit {
  @Input() taskModel: EnglishTaskCorrectOptionModel;
  @Output() answear = new EventEmitter<number>();
  
  choosedValue: number;
  isIncorrectAnswear: boolean;

  constructor() { }

  ngOnInit() {
  }
}
