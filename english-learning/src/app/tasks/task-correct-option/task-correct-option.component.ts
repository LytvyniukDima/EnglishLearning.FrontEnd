import { Component, OnInit, Input } from '@angular/core';
import { EnglishTaskModel } from '../models/EnglishTaskModel';
import { EnglishTaskCorrectOptionModel } from '../models/EnglishTaskCorrectOptionModel';
import { EnglishTaskResult } from '../models/EnglishTaskResult';

@Component({
  selector: 'app-task-correct-option',
  templateUrl: './task-correct-option.component.html',
  styleUrls: ['./task-correct-option.component.css']
})
export class TaskCorrectOptionComponent implements OnInit {
  @Input() task: EnglishTaskModel;

  models: EnglishTaskCorrectOptionModel[] = [];
  usersAnswears: number[];
  answears: number[];
  resultModel = new EnglishTaskResult();

  constructor() { }

  ngOnInit() {
    this.usersAnswears = new Array(this.models.length);
    this.answears = new Array(this.models.length);
    this.parseAnswear();
    this.parseTask();
  }

  parseTask() {
    let splitedText = this.task.text.split('\n');
    for (let i = 0; i < splitedText.length; i++) {
      let englishTaskCorrectOptionModel = new EnglishTaskCorrectOptionModel();
      let splitedByContentOption = splitedText[i].split('|');
      let content = splitedByContentOption[0];
      let options = splitedByContentOption[1];

      englishTaskCorrectOptionModel.items = content.split('<br>');
      englishTaskCorrectOptionModel.options = options.split('/');

      englishTaskCorrectOptionModel.answear = this.answears[i];
      this.models.push(englishTaskCorrectOptionModel);
    }

    console.log(this.models);
  }

  parseAnswear() {
    let splitedAnswears = this.task.answear.split('\n');

    for (let answear of splitedAnswears) {
      this.answears.push(parseInt(answear));
    }
  }

  onChangedAnswears(answear: number, index: number) {
    this.usersAnswears[index] = answear;
  }

  onFinish() {
    this.resultModel.correct = 0;
    this.resultModel.incorrect = 0;

    console.log(this.answears);
    console.log(this.usersAnswears);
    for (let i = 0; i < this.answears.length; i++) {
      if (this.answears[i] === this.usersAnswears[i]) {
        this.resultModel.correct++;
      } else {
        this.resultModel.incorrect++;
      }
    }

    if(this.resultModel.incorrect === 0 && this.resultModel.correct > 0) {
      this.resultModel.headerMessage = "Congratulations!";
    } else {
      this.resultModel.headerMessage = "Good Try!"
    }
  }
}
