import { Component, Input, OnInit } from '@angular/core';
import { EnglishTaskModel } from '../models/EnglishTaskModel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: EnglishTaskModel;

  constructor() { }

  ngOnInit() {
  }
}
