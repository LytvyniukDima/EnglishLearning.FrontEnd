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
  topVideoTypes: string[];
  topTextTypes: string[];

  constructor(private completedStatisticService: CompletedStatisticService) { }

  ngOnInit() {
    this.getCompletedStatistic();
  }

  getCompletedStatistic() {
    this.completedStatisticService.getFullStatistic().subscribe(data => {
      console.log(data);

      this.completedStatistic = data.groupedCompletedStatistic;
      this.fullStatistic = data;
      this.setStatisticData(this.fullStatistic);
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
  }

  setStatisticData(fullStatistic: FullStatisticModel) {
    this.topVideoTypes = [];
    this.topTextTypes = [];

    let topVideoTypes = fullStatistic.perVideoTypeStatistic;
    let topTextTypes = fullStatistic.perTextTypeStatistic;

    topVideoTypes = topVideoTypes
      .sort(function (a, b) {
        if (a.count > b.count) {
          return 1;
        }
        if (a.count < b.count) {
          return -1;
        }
        return 0;
      })
      .reverse();

    topTextTypes
      .sort(function (a, b) {
        if (a.count > b.count) {
          return 1;
        }
        if (a.count < b.count) {
          return -1;
        }
        return 0;
      })
      .reverse()

      for (let i = 0; i < 3; i++)
        this.topVideoTypes.push(topVideoTypes[i].contentType);

      for (let i = 0; i < 3; i++)
        this.topTextTypes.push(topTextTypes[i].contentType);
  }
}
