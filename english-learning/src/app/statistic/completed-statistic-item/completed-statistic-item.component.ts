import { Component, OnInit, Input } from '@angular/core';
import { GroupedCompletedStatisticModel } from '../models/GroupedCompletedStatisticModel';
import { CompletedStatisticModel } from '../models/CompletedStatisticModel';

@Component({
  selector: 'app-completed-statistic-item',
  templateUrl: './completed-statistic-item.component.html',
  styleUrls: ['./completed-statistic-item.component.css']
})
export class CompletedStatisticItemComponent implements OnInit {
  @Input() completedStatistic: GroupedCompletedStatisticModel;

  constructor() { }

  ngOnInit() {

  }

  getContentClass(completedStatisticItem: CompletedStatisticModel) {
    switch(completedStatisticItem.type)
    {
      case "Text":
        return 'table-info';
      case "Video": 
        return 'table-danger';
      case "Task":
        return 'table-warning';
      default:
        return 'table-success';
    }
  }
}
