import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddWordListItemModel } from '../../../dictionary-core/models/add-word-list-item.model';
import { WordSearchModel } from '../../../dictionary-core/models/word-search.model';
import { DictionaryApiService } from '../../services/dictionary-api.service';

@Component({
  selector: 'app-word-details-container',
  templateUrl: './word-details-container.component.html',
  styleUrls: ['./word-details-container.component.css']
})
export class WordDetailsContainerComponent implements OnInit, OnChanges {
  @Input() word: string;

  public wordSearch$: Observable<WordSearchModel>;

  constructor(private apiService: DictionaryApiService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.wordSearch$ = this.apiService.searchWord(this.word);
  }

  onAddWordToList(item: AddWordListItemModel): void {
    this.apiService.addWordToList(item).subscribe(() => {});
  }
}
