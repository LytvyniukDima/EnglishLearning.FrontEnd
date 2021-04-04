import { Component, Input, OnInit } from '@angular/core';
import { WordListItemModel } from '../../../dictionary-core/models/word-list-item.model';

@Component({
  selector: 'app-user-word-list',
  templateUrl: './user-word-list.component.html',
  styleUrls: ['./user-word-list.component.css']
})
export class UserWordListComponent implements OnInit {
  @Input() words: WordListItemModel[];

  constructor() { }

  ngOnInit(): void {
  }

  getWordId(word: WordListItemModel): string {
    return `id-${word.word}`;
  }

  getDataTarget(word: WordListItemModel): string {
    return `#${this.getWordId(word)}`;
  }
}
