import { Component, OnInit, Input } from '@angular/core';
import { PerDayStatisticModel } from '../models/PerDayStatisticModel';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-last-month-statistic',
  templateUrl: './last-month-statistic.component.html',
  styleUrls: ['./last-month-statistic.component.css']
})
export class LastMonthStatisticComponent implements OnInit {
  @Input() perDayStatistics: PerDayStatisticModel[];

  chart: Chart;

  ngOnInit() {
    this.getData();
  }

  public getData() {
    let labels = [];
    let tasks = [];
    let videos = [];
    let texts = [];

    this.perDayStatistics.forEach(item => {
      labels.push(`${item.date.day}/${item.date.month}/${item.date.year}`)
      tasks.push(item.completedTasksCount);
      videos.push(item.completedVideoCount);
      texts.push(item.completedTextCount);
    })

    var trashData = {
      labels: labels,
      datasets: [
        {
          label: "Tasks",
          data: tasks,
          backgroundColor: "#cc65fe",
          borderWidth: 1
        },
        {
          label: "Videos",
          data: videos,
          backgroundColor: "#ffce56",
          borderWidth: 1
        },
        {
          label: "Texts",
          data: texts,
          backgroundColor: "#ff6384",
          borderWidth: 1
        }]
    };

    this.chart = new Chart('canvas-last-month-statistic', {
      type: 'bar',
      data: trashData,
      options: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    });
  }

}
