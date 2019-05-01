import { Component, OnInit, Input } from '@angular/core';
import { EnglishTaskModel } from '../models/EnglishTaskModel';

@Component({
  selector: 'app-task-brackets',
  templateUrl: './task-brackets.component.html',
  styleUrls: ['./task-brackets.component.css']
})
export class TaskBracketsComponent implements OnInit {
  @Input() task: EnglishTaskModel;

  constructor() { }

  ngOnInit() {
  }

}
