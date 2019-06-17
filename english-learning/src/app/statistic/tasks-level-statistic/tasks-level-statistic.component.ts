import { Component, OnInit, Input } from '@angular/core';
import { PerLevelStatisticModel } from '../models/PerLevelStatisticModel';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tasks-level-statistic',
  templateUrl: './tasks-level-statistic.component.html',
  styleUrls: ['./tasks-level-statistic.component.css']
})
export class TasksLevelStatisticComponent implements OnInit {
  @Input() levelStatistic: PerLevelStatisticModel[];
  
  chart: Chart;

  constructor() { }

  ngOnInit() {
    this.getData();
  }

  public getData() {
    let labels = [];
    let data = [];

    this.levelStatistic.forEach(function (item) {
      labels.push(item.englishLevel);
      data.push(item.count);
      console.log(item);
    });

    var trashData = {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: [
            "#cc65fe",
            "#ffce56",
            "#ff6384",
            "#36a2eb",
            "Brown",
            "Purple",
            "Silver",
            "Green"
          ],
          borderWidth: 1
        }]
    };

    this.chart = new Chart('canvas-tasks-statistic', {
      type: 'doughnut',
      data: trashData
    });
  }
}
