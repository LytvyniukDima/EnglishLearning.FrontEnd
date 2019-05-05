import { Component, OnInit, Input } from '@angular/core';
import { EnglishTaskModel } from '../models/EnglishTaskModel';
import { EnglishTaskSlashModel } from '../models/EnglishTaskSlashModel';
import { EnglishTaskSlashItem } from '../models/EnglishTaskSlashItem';
import { EnglishTaskResult } from '../models/EnglishTaskResult';

@Component({
  selector: 'app-task-slash',
  templateUrl: './task-slash.component.html',
  styleUrls: ['./task-slash.component.css']
})
export class TaskSlashComponent implements OnInit {
  @Input() task: EnglishTaskModel;
  
  models: EnglishTaskSlashModel[] = [];
  usersAnswers: number[][];
  answers: number[][];
  resultModel = new EnglishTaskResult();

  constructor() { }

  ngOnInit() {
    this.usersAnswers = new Array(this.task.count);
    this.answers = new Array(this.task.count);
    this.parseAnswer();
    this.parseTask();
  }

  parseTask() {
    let splitedText = this.task.text.split('\n');
    for (let i = 0; i < splitedText.length ; i++) {
      let englishTaskSlashModel = new EnglishTaskSlashModel();
      let splitedByNewLine = splitedText[i].split('<br>');

      for (let line of splitedByNewLine) {
        englishTaskSlashModel.items.push(this.parseLine(line));
      }

      englishTaskSlashModel.answers = this.answers[i];
      this.models.push(englishTaskSlashModel);
    }

    console.log(this.models);
  }

  parseLine(line: string): EnglishTaskSlashItem[] {
    let result: EnglishTaskSlashItem[] = [];
    let optionRegex = /\*\*.*\*\*/g;

    let option = optionRegex.exec(line);

    let optionSlashItem = new EnglishTaskSlashItem;
    optionSlashItem.isOption = true;
    optionSlashItem.content = option[0].split('**')[1].split('/');

    if (option.index == 0) {
      let usualSlashItem = new EnglishTaskSlashItem;
      usualSlashItem.isOption = false;
      usualSlashItem.content.push(line.substring(optionRegex.lastIndex, line.length));
      
      result.push(optionSlashItem);
      result.push(usualSlashItem);
    }
    else {
      let usualSlashItemFirst = new EnglishTaskSlashItem;
      usualSlashItemFirst.isOption = false;
      usualSlashItemFirst.content.push(line.substring(0, option.index));
   
      result.push(usualSlashItemFirst);
      result.push(optionSlashItem);

      if (optionRegex.lastIndex < line.length) {
        let usualSlashItemSecond = new EnglishTaskSlashItem;
        usualSlashItemSecond.isOption = false;
        usualSlashItemSecond.content.push(line.substring(optionRegex.lastIndex, line.length));

        result.push(usualSlashItemSecond);
      }
    }

    return result;
  }

  parseAnswer() {
    let splitedAnswers = this.task.answer.split('\n');

    for (let i = 0; i < splitedAnswers.length ; i++) {
      this.answers[i] = [];

      let sentencesItems = splitedAnswers[i].split('/')
      for (let sentencesItem of sentencesItems) {
        this.answers[i].push(parseInt(sentencesItem))
      }
    }
  }

  onChangedAnswers(answer: number[], index: number) {
    this.usersAnswers[index] = answer;
  }

  onFinish() {
    this.resultModel.correct = 0;
    this.resultModel.incorrect = 0;

    console.log(this.answers);
    for (let i = 0; i < this.answers.length; i++) {
      for (let j = 0; j < this.answers[i].length; j++) {
        if (this.answers[i][j] === this.usersAnswers[i][j]) {
          this.resultModel.correct++;
        } else {
          this.resultModel.incorrect++;
        }
      }
    }

    if (this.resultModel.incorrect === 0 && this.resultModel.correct > 0) {
      this.resultModel.headerMessage = "Congratulations!";
    } else {
      this.resultModel.headerMessage = "Good Try!"
    }
  }
}
