import { Component, OnInit, Input } from '@angular/core';
import { TasksCorrectnessStatisticModel } from '../models/TasksCorrectnessStatisticModel';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tasks-correctness-statistic',
  templateUrl: './tasks-correctness-statistic.component.html',
  styleUrls: ['./tasks-correctness-statistic.component.css']
})
export class TasksCorrectnessStatisticComponent implements OnInit {
  @Input() tasksCorrectness: TasksCorrectnessStatisticModel;

  chart: Chart;

  constructor() { }

  ngOnInit() {
    this.getData();
  }

  public getData() {
    let labels = ['Correct', 'Incorrect'];
    let data = [
      this.tasksCorrectness.correctPercentage,
      this.tasksCorrectness.incorrectPercentage
    ];

    var trashData = {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: [
            "#27AE60",
            "#C0392B"
          ],
          borderWidth: 1
        }]
    };

    this.chart = new Chart('canvas-correctness-statistic', {
      type: 'doughnut',
      data: trashData,
      options: {
        rotation: -Math.PI,
        cutoutPercentage: 30,
        circumference: Math.PI,
      }
    });
  }
}
