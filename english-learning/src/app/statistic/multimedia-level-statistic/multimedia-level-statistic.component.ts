import { Component, OnInit, Input } from '@angular/core';
import { PerLevelStatisticModel } from '../models/PerLevelStatisticModel';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-multimedia-level-statistic',
  templateUrl: './multimedia-level-statistic.component.html',
  styleUrls: ['./multimedia-level-statistic.component.css']
})
export class MultimediaLevelStatisticComponent implements OnInit {
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
            "#ff6384",
            "#36a2eb",
            "#cc65fe",
            "#ffce56",
            "Brown",
            "Purple",
            "Silver",
            "Green"
          ],
          borderWidth: 1
        }]
    };

    this.chart = new Chart('canvas-multimedia-statistic', {
      type: 'doughnut',
      data: trashData
    });
  }
}
