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
  @Output() answers = new EventEmitter<number[]>();
  
  allItems: EnglishTaskSlashItem[][];
  choosedValues: number[];
  isIncorrectAnswers: boolean[];

  constructor() { }

  ngOnInit() {
    this.choosedValues = new Array(this.taskModel.items.length);
    this.isIncorrectAnswers = new Array(this.taskModel.items.length);
    this.allItems = this.parseLines(this.taskModel.lines);
  }

  selectOption(option: string, index: number) {
    let numberOption = parseInt(option);
    this.choosedValues[index] = numberOption;
    this.answers.emit(this.choosedValues);

    if (this.taskModel.answers[index] !== numberOption) {
      this.isIncorrectAnswers[index] = true;
    } else {
      this.isIncorrectAnswers[index] = false;
    }
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
