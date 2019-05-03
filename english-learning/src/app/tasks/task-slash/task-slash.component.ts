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
  usersAnswears: number[][];
  answears: number[][];
  resultModel = new EnglishTaskResult();

  constructor() { }

  ngOnInit() {
    this.usersAnswears = new Array(this.task.count);
    this.answears = new Array(this.task.count);
    this.parseAnswear();
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

      englishTaskSlashModel.answears = this.answears[i];
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

  parseAnswear() {
    let splitedAnswears = this.task.answear.split('\n');

    for (let i = 0; i < splitedAnswears.length ; i++) {
      this.answears[i] = [];

      let sentencesItems = splitedAnswears[i].split('/')
      for (let sentencesItem of sentencesItems) {
        this.answears[i].push(parseInt(sentencesItem))
      }
    }
  }

  onChangedAnswears(answear: number[], index: number) {
    this.usersAnswears[index] = answear;
  }

  onFinish() {
    this.resultModel.correct = 0;
    this.resultModel.incorrect = 0;

    console.log(this.answears);
    for (let i = 0; i < this.answears.length; i++) {
      for (let j = 0; j < this.answears[i].length; j++) {
        if (this.answears[i][j] === this.usersAnswears[i][j]) {
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
