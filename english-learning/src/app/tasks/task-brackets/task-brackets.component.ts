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
  usersAnswers: string[];
  answers: string[][];
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
    for (let i = 0; i < splitedText.length; i++) {
      let englishTaskBracketsModel = new EnglishTaskBracketsModel();
      let splitedByContentOption = splitedText[i].split('|');
      let content = splitedByContentOption[0];
      let option = splitedByContentOption[1];
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

      let bracketsItem = new EnglishTaskBracketsItem();
      bracketsItem.isOption = false;
      bracketsItem.content = `(${option})`;

      englishTaskBracketsModel.answers = this.answers[i];

      englishTaskBracketsModel.items[englishTaskBracketsModel.items.length - 1].push(bracketsItem);

      this.models.push(englishTaskBracketsModel);
    }

    console.log(this.models);
  }

  parseAnswer() {
    let splitedAnswers = this.task.answer.split('\n');

    for (let i = 0; i < splitedAnswers.length; i++) {
      this.answers[i] = [];

      let sentencesItems = splitedAnswers[i].split('/')
      for (let sentencesItem of sentencesItems) {
        this.answers[i].push(sentencesItem);
      }
    }
  }

  onChangedAnswers(answer: string, index: number) {
    this.usersAnswers[index] = answer;
  }

  onFinish() {
    this.resultModel.correct = 0;
    this.resultModel.incorrect = 0;

    console.log(this.answers);
    for (let i = 0; i < this.answers.length; i++) {
      if (this.answers[i].includes(this.usersAnswers[i])) {
        this.resultModel.correct++;
      } else {
        this.resultModel.incorrect++;
        
        let correctAnswear = `${i + 1}. correct answer - ${this.answers[i][0]}`;
        this.resultModel.additionalMessages.push(correctAnswear);
      }
    }

    if (this.resultModel.incorrect === 0 && this.resultModel.correct > 0) {
      this.resultModel.headerMessage = "Congratulations!";
    } else {
      this.resultModel.headerMessage = "Good Try!"
    }
  }
}
