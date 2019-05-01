import { Component, OnInit } from '@angular/core';
import { EnglishTaskModel } from '../models/EnglishTaskModel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public task = new EnglishTaskModel()

  constructor() { }

  ngOnInit() {
    this.task.id = 'asdfasd';
    this.task.taskType = 'Division By Slash';
    this.task.grammarPart = 'Present Simple';
    this.task.englishLevel = 'Intermediate';
    this.task.count = 10;
    this.task.example = '';
    this.task.text = "A: I**\'ve never been/didn\'t go** to Hollywood.<br>B: Haven\'t you? I **went/\'ve been** there last year.\nA: How many films **have you acted/did you act** in so far?<br>B: I**\'ve acted/acted** in seven films up to now.";
    this.task.answear = "1/2\n2/1";
  }
}
