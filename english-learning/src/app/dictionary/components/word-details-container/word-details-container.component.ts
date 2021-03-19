import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { WordSearchModel } from '../../models/word-search.model';
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
    console.error(this.word);
    this.wordSearch$ = this.apiService.searchWord(this.word);
  }
}
