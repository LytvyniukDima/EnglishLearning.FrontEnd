import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EnglishTaskSlashItem } from '../models/EnglishTaskSlashItem';
import { EnglishTaskSlashModel } from '../models/EnglishTaskSlashModel';

@Component({
  selector: 'app-task-slash-item',
  templateUrl: './task-slash-item.component.html',
  styleUrls: ['./task-slash-item.component.css']
})
export class TaskSlashItemComponent implements OnInit {
  @Input() taskModel: EnglishTaskSlashModel;
  @Output() result = new EventEmitter<boolean>();
  
  allItems: EnglishTaskSlashItem[][];
  isIncorrectAnswers: boolean[];

  constructor() { }

  ngOnInit() {
    this.isIncorrectAnswers = new Array(this.taskModel.lines.length);
    this.allItems = this.parseLines(this.taskModel.lines);
  }

  selectOption(option: string, index: number) {
    const numberOption = parseInt(option);
    const isCorrect = this.taskModel.answers[index] === numberOption;
    
    if (isCorrect) {
      this.isIncorrectAnswers[index] = false;
    } else {
      this.isIncorrectAnswers[index] = true;
    }

    const isTaskCorrect = this.isIncorrectAnswers.every(x => !x);
    this.result.emit(isTaskCorrect);
  }

  private parseLines(lines: string[]): EnglishTaskSlashItem[][] {
    const parsedItems: EnglishTaskSlashItem[][] = [];
    
    for (let line of lines) {
      const parsedLine = this.parseLine(line);

      parsedItems.push(parsedLine);
    }

    return parsedItems;
  }

  private parseLine(line: string): EnglishTaskSlashItem[] {
    const result: EnglishTaskSlashItem[] = [];
    const optionRegex = /\*\*.*\*\*/g;

    const option = optionRegex.exec(line);

    const optionSlashItem = new EnglishTaskSlashItem;
    optionSlashItem.isOption = true;
    optionSlashItem.content = option[0].split('**')[1].split('/');

    if (option.index == 0) {
      const usualSlashItem = new EnglishTaskSlashItem;
      usualSlashItem.isOption = false;
      usualSlashItem.content.push(line.substring(optionRegex.lastIndex, line.length));
      
      result.push(optionSlashItem);
      result.push(usualSlashItem);
    }
    else {
      const usualSlashItemFirst = new EnglishTaskSlashItem;
      usualSlashItemFirst.isOption = false;
      usualSlashItemFirst.content.push(line.substring(0, option.index));
   
      result.push(usualSlashItemFirst);
      result.push(optionSlashItem);

      if (optionRegex.lastIndex < line.length) {
        const usualSlashItemSecond = new EnglishTaskSlashItem;
        usualSlashItemSecond.isOption = false;
        usualSlashItemSecond.content.push(line.substring(optionRegex.lastIndex, line.length));

        result.push(usualSlashItemSecond);
      }
    }

    return result;
  }
}
