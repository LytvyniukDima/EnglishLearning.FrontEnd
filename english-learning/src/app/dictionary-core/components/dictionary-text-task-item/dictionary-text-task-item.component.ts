import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WordDetailsModel } from '../../models/word-details.model';

@Component({
  selector: 'app-dictionary-text-task-item',
  templateUrl: './dictionary-text-task-item.component.html',
  styleUrls: ['./dictionary-text-task-item.component.css']
})
export class DictionaryTextTaskItemComponent implements OnInit {
  @Input() word: WordDetailsModel;

  @Output() isCorrect = new EventEmitter<boolean>();

  isIncorrectAnswer = false;
  wordDefinition: string;

  constructor() { }

  ngOnInit(): void {
    this.wordDefinition = this.word.results[0].definition;
  }

  onInputChange(event): void {
    const answer = event.target.value;
    if (answer !== this.word.word) {
      this.isIncorrectAnswer = true;
    } else {
      this.isIncorrectAnswer = false;
    }

    this.isCorrect.emit(!this.isIncorrectAnswer);
  }

  getRandomDefinition(): string {
    const min = 0;
    const max = this.word.results.length;
    const index = Math.floor(Math.random() * (max - min)) + min;

    return this.word.results[index].definition;
  }
}
