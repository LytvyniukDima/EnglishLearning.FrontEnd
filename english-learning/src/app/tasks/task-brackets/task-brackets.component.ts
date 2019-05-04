import { Component, OnInit, Input } from '@angular/core';
import { EnglishTaskModel } from '../models/EnglishTaskModel';
import { EnglishTaskBracketsModel } from '../models/EnglishTaskBracketsModel';
import { EnglishTaskResult } from '../models/EnglishTaskResult';
import { EnglishTaskBracketsItem } from '../models/EnglishTaskBracketsItem';

@Component({
  selector: 'app-task-brackets',
  templateUrl: './task-brackets.component.html',
  styleUrls: ['./task-brackets.component.css']
})
export class TaskBracketsComponent implements OnInit {
  @Input() task: EnglishTaskModel;

  models: EnglishTaskBracketsModel[] = [];
  usersAnswears: string[];
  answears: string[][];
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
    for (let i = 0; i < splitedText.length; i++) {
      let englishTaskBracketsModel = new EnglishTaskBracketsModel();
      let splitedByContentOption = splitedText[i].split('|');
      let content = splitedByContentOption[0];
      let options = splitedByContentOption[1];
      let splitedByNewLine = content.split('<br>');

      for (let line of splitedByNewLine) {
        let targetPosition = line.indexOf("__");
        let itemsArray: EnglishTaskBracketsItem[] = [];

        if (targetPosition > -1) {
          let targetItem = new EnglishTaskBracketsItem();
          targetItem.isOption = true;

          if (targetPosition === 0) {
            let contentItem = new EnglishTaskBracketsItem();
            contentItem.isOption =  false;
            contentItem.content = line.substring(2, line.length);

            itemsArray.push(targetItem);
            itemsArray.push(contentItem);
          } else {
            let contentItemFirst = new EnglishTaskBracketsItem();
            contentItemFirst.isOption =  false;
            contentItemFirst.content = line.substring(0, targetPosition);

            itemsArray.push(contentItemFirst);
            itemsArray.push(targetItem);
            
            if (targetPosition + 2 < line.length) {
              let contentItemSecond = new EnglishTaskBracketsItem();
              contentItemSecond.isOption =  false;
              contentItemSecond.content = line.substring(targetPosition + 2, line.length);

              itemsArray.push(contentItemSecond);
            }
          }
        } 
        else {
          let item = new EnglishTaskBracketsItem();
          item.isOption = false;
          item.content = line;

          itemsArray.push(item);
        } 

        englishTaskBracketsModel.items.push(itemsArray);
      }

      englishTaskBracketsModel.answears = this.answears[i];
      englishTaskBracketsModel.inBrackets = options;
      this.models.push(englishTaskBracketsModel);
    }

    console.log(this.models);
  }

  parseAnswear() {
    let splitedAnswears = this.task.answear.split('\n');

    for (let i = 0; i < splitedAnswears.length; i++) {
      this.answears[i] = [];

      let sentencesItems = splitedAnswears[i].split('/')
      for (let sentencesItem of sentencesItems) {
        this.answears[i].push(sentencesItem);
      }
    }
  }

  onChangedAnswears(answear: string, index: number) {
    this.usersAnswears[index] = answear;
  }

  onFinish() {
    this.resultModel.correct = 0;
    this.resultModel.incorrect = 0;

    console.log(this.answears);
    for (let i = 0; i < this.answears.length; i++) {
      if (this.answears[i].includes(this.usersAnswears[i])) {
        this.resultModel.correct++;
      } else {
        this.resultModel.incorrect++;
      }
    }

    if (this.resultModel.incorrect === 0 && this.resultModel.correct > 0) {
      this.resultModel.headerMessage = "Congratulations!";
    } else {
      this.resultModel.headerMessage = "Good Try!"
    }
  }
}
