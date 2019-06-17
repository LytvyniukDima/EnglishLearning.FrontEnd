import { Component, OnInit } from '@angular/core';
import { CompletedStatisticService } from '../services/completed-statistic.service';
import { GroupedCompletedStatisticModel } from '../models/GroupedCompletedStatisticModel';
import { HttpErrorResponse } from '@angular/common/http';
import { FullStatisticModel } from '../models/FullStatisticModel';

@Component({
  selector: 'app-completed-statistic',
  templateUrl: './completed-statistic.component.html',
  styleUrls: ['./completed-statistic.component.css']
})
export class CompletedStatisticComponent implements OnInit {
  completedStatistic: GroupedCompletedStatisticModel[];
  fullStatistic: FullStatisticModel;

  constructor(private completedStatisticService: CompletedStatisticService) { }

  ngOnInit() {
    this.getCompletedStatistic();
  }

  getCompletedStatistic() {
    this.completedStatisticService.getFullStatistic().subscribe(data => {
      console.log(data);

      this.completedStatistic = data.groupedCompletedStatistic;
      this.fullStatistic = data;
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
  }
}
