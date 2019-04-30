import { Component, OnInit, Input } from '@angular/core';
import { EnglishTaskInfoModel } from '../models/EnglishTaskInfoModel';

@Component({
  selector: 'app-tasks-list-card',
  templateUrl: './tasks-list-card.component.html',
  styleUrls: ['./tasks-list-card.component.css']
})
export class TasksListCardComponent implements OnInit {
  @Input() taskInfo: EnglishTaskInfoModel;
  public englishLevelColor: string;

  constructor() { }

  ngOnInit() {
    switch(this.taskInfo.englishLevel)
    {
      case 'Elementary': {
        this.englishLevelColor = 'red'
        break;
      }
      case 'PreIntermediate': {
        this.englishLevelColor = 'orange';
        break;
      }
      case 'Intermediate': {
        this.englishLevelColor = '#CFCA0F';
        break;
      }
      case 'UpperIntermediate': {
        this.englishLevelColor = 'green';
        break;
      }
      case 'Advanced': {
        this.englishLevelColor = 'blue';
        break;
      }
      default: {
        this.englishLevelColor = 'grey';
        break;
      }
    }
  }
}
