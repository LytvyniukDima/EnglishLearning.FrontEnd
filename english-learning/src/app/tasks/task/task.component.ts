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
    // this.task.id = 'asdfasd';
    // this.task.taskType = 'Division By Slash';
    // this.task.grammarPart = 'Present Simple';
    // this.task.englishLevel = 'Intermediate';
    // this.task.count = 10;
    // this.task.example = '';
    // this.task.text = "A: I**\'ve never been/didn\'t go** to Hollywood.<br>B: Haven\'t you? I **went/\'ve been** there last year.\nA: How many films **have you acted/did you act** in so far?<br>B: I**\'ve acted/acted** in seven films up to now.";
    // this.task.answear = "1/2\n2/1";

    // this.task.id = 'asdfasd';
    // this.task.taskType = 'Correct Option';
    // this.task.grammarPart = 'Present Simple';
    // this.task.englishLevel = 'Intermediate';
    // this.task.count = 10;
    // this.task.example = '';
    // this.task.text = "Jose is __________ - he speaks Spanish and<br>English.|monolingual/bilingual/multilingual\nHow should you dress before an interwiew?|messily/briliantly/smartly";
    // this.task.answear = "1\n2";

    this.task.id = 'asdfasd';
    this.task.taskType = 'Simple Brackets';
    this.task.grammarPart = 'Present Simple';
    this.task.englishLevel = 'Intermediate';
    this.task.count = 10;
    this.task.example = '';
    this.task.text = "Margaret __ four languages - English, French, German and Spanish.|speak\nI __ my job. It's very boring.|like";
    this.task.answear = "speaks\ndon\'t like/do not like";
  }
}
