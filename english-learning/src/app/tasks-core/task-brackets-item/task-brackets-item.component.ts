import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EnglishTaskBracketsItem } from '../models/EnglishTaskBracketsItem';
import { EnglishTaskBracketsLineModel } from '../models/EnglishTaskBracketsLineModel';
import { EnglishTaskBracketsModel } from '../models/EnglishTaskBracketsModel';

@Component({
  selector: 'app-task-brackets-item',
  templateUrl: './task-brackets-item.component.html',
  styleUrls: ['./task-brackets-item.component.css']
})
export class TaskBracketsItemComponent implements OnInit {
  @Input() taskModel: EnglishTaskBracketsModel;
  @Output() results = new EventEmitter<boolean>();
  
  lines: EnglishTaskBracketsLineModel[];
  items: EnglishTaskBracketsItem[][];
  isIncorrectAnswers: boolean[];

  constructor() { }

  ngOnInit() {
    this.isIncorrectAnswers = new Array(this.taskModel.lines.length);
    this.lines = this.taskModel.lines;
    this.items = this.parseItems(this.taskModel.lines);
  }

  onInputChange(event, lineIndex: number) {
    const userAnswer = event.target.value;

    const isCorrect = this.lines[lineIndex].answer.includes(userAnswer);

    if (!isCorrect) {
      this.isIncorrectAnswers[lineIndex] = true;
    }
    else {
      this.isIncorrectAnswers[lineIndex] = false;
    }

    const isTaskCorrect = this.isIncorrectAnswers.every(x => !x);

    this.results.emit(isTaskCorrect);
  }

  isIncorrectAnswer(index: number): boolean {
    return this.isIncorrectAnswers[index];
  }

  private parseItems(taskLines: EnglishTaskBracketsLineModel[]): EnglishTaskBracketsItem[][] {
    const newItems: EnglishTaskBracketsItem[][] = [];
    taskLines.forEach(line => {
      const parsedItem = this.parseItem(line);
      newItems.push(parsedItem);
    });

    return newItems;
  }

  private parseItem(line: EnglishTaskBracketsLineModel): EnglishTaskBracketsItem[] {
    let newItems: EnglishTaskBracketsItem[] = [];
    const content = line.content;
    let optionPosition = content.indexOf("__");

    if (optionPosition > -1) {
      let optionItem = new EnglishTaskBracketsItem();
      optionItem.isOption = true;

      if (optionPosition == 0) {
        newItems.push(optionItem);

        const contentItem = new EnglishTaskBracketsItem();
        contentItem.isOption = false;
        contentItem.content = content.substring(2, content.length);
        newItems.push(contentItem);
      } else {
        const contentItemFirst = new EnglishTaskBracketsItem();
        contentItemFirst.isOption = false;
        contentItemFirst.content = content.substring(0, optionPosition);

        newItems.push(contentItemFirst);
        newItems.push(optionItem);

        if (optionPosition + 2 < content.length) {
          const contentItemSecond = new EnglishTaskBracketsItem();
          contentItemSecond.isOption = false;
          contentItemSecond.content = content.substring(optionPosition + 2, content.length);

          newItems.push(contentItemSecond);
        }
      }

    } else {
      const newItem = new EnglishTaskBracketsItem();
      newItem.isOption = false;
      newItem.content = content;

      newItems.push(newItem);
    }

    if(line.option !== undefined && line.option !== null) {
      const bracketsItem = new EnglishTaskBracketsItem();
      bracketsItem.isOption = false;
      bracketsItem.content = `(${line.option})`;

      newItems.push(bracketsItem);
    }

    return newItems;
  }
}
