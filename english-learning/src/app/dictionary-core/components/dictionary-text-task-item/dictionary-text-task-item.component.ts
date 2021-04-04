import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dictionary-text-task-item',
  templateUrl: './dictionary-text-task-item.component.html',
  styleUrls: ['./dictionary-text-task-item.component.css']
})
export class DictionaryTextTaskItemComponent implements OnInit {
  @Input() word: string;

  @Output() isCorrect = new EventEmitter<boolean>();

  isIncorrectAnswer = false;

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event): void {
    const answer = event.target.value;
    if (answer !== this.word) {
      this.isIncorrectAnswer = true;
    } else {
      this.isIncorrectAnswer = false;
    }

    this.isCorrect.emit(!this.isIncorrectAnswer);
  }
}
