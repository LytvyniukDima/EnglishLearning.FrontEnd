import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordListItemModel } from '../../../dictionary-core/models/word-list-item.model';
import { DictionaryApiService } from '../../../dictionary-core/service/dictionary-api.service';

@Component({
  selector: 'app-user-word-list-container',
  templateUrl: './user-word-list-container.component.html',
  styleUrls: ['./user-word-list-container.component.css']
})
export class UserWordListContainerComponent implements OnInit {
  public wordList$: Observable<WordListItemModel>;

  constructor(private apiService: DictionaryApiService) { }

  ngOnInit(): void {
    this.wordList$ = this.apiService.getWordList();
  }

}
