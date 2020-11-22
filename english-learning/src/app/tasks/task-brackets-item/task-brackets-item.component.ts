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
  @Output() answer = new EventEmitter<string>();
  
  lines: EnglishTaskBracketsLineModel[];
  items: EnglishTaskBracketsItem[][];
  isIncorrectAnswer: boolean;

  constructor() { }

  ngOnInit() {
    this.lines = this.taskModel.lines;
    this.items = this.parseItems(this.taskModel.lines);
  }

  onInputChange(event) {
    let userAnswer = event.target.value;
    this.answer.emit(userAnswer);

    if (!this.taskModel.answers.includes(userAnswer))
      this.isIncorrectAnswer = true;
    else
      this.isIncorrectAnswer = false;
  }

  private parseItems(taskLines: EnglishTaskBracketsLineModel[]): EnglishTaskBracketsItem[][] {
    const newItems: EnglishTaskBracketsItem[][] = [];
    taskLines.forEach(element => {
      const parsedItem = this.parseItem(element.content);
      newItems.push(parsedItem);
    });

    return newItems;
  }

  private parseItem(item: string): EnglishTaskBracketsItem[] {
    let newItems: EnglishTaskBracketsItem[] = [];
    let optionPosition = item.indexOf("__");

    if (optionPosition > -1) {
      let optionItem = new EnglishTaskBracketsItem();
      optionItem.isOption = true;

      if (optionPosition == 0) {
        newItems.push(optionItem);

        const contentItem = new EnglishTaskBracketsItem();
        contentItem.isOption = false;
        contentItem.content = item.substring(2, item.length);
        newItems.push(contentItem);
      } else {
        const contentItemFirst = new EnglishTaskBracketsItem();
        contentItemFirst.isOption = false;
        contentItemFirst.content = item.substring(0, optionPosition);

        newItems.push(contentItemFirst);
        newItems.push(optionItem);

        if (optionPosition + 2 < line.length) {
          const contentItemSecond = new EnglishTaskBracketsItem();
          contentItemSecond.isOption = false;
          contentItemSecond.content = item.substring(optionPosition + 2, item.length);

          newItems.push(contentItemSecond);
        }
      }

    } else {
      const newItem = new EnglishTaskBracketsItem();
      newItem.isOption = false;
      newItem.content = item;

      newItems.push(newItem);
    }

    return newItems;
  }
}
