import { Component, OnInit, Input } from '@angular/core';
import { EnglishTaskModel } from '../models/EnglishTaskModel';
import { EnglishTaskSlashModel } from '../models/EnglishTaskSlashModel';
import { EnglishTaskSlashItem } from '../models/EnglishTaskSlashItem';

@Component({
  selector: 'app-task-slash',
  templateUrl: './task-slash.component.html',
  styleUrls: ['./task-slash.component.css']
})
export class TaskSlashComponent implements OnInit {
  @Input() task: EnglishTaskModel;
  
  models: EnglishTaskSlashModel[] = [];
  usersAnswears: number[][];
  
  constructor() { }

  ngOnInit() {
    this.parseTask();
    this.usersAnswears = new Array(this.models.length);
  }

  parseTask() {
    let splitedText = this.task.text.split('\n');
    for (let textItem of splitedText) {
      let englishTaskSlashModel = new EnglishTaskSlashModel();
      let splitedByNewLine = textItem.split('<br>');

      for (let line of splitedByNewLine) {
        englishTaskSlashModel.items.push(this.parseLine(line));
      }

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

  onChangedAnswears(answear: number[], index: number) {
    this.usersAnswears[index] = answear;
    console.log(this.usersAnswears);
  }
}
