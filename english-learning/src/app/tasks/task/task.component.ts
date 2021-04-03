import { Component, Input, OnInit } from '@angular/core';
import { EnglishTaskModel } from '../models/EnglishTaskModel';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../services/tasks.service';

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
