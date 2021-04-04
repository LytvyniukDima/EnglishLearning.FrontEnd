import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/authorization/serives/auth.service';
import { AddWordListItemModel } from '../../models/add-word-list-item.model';
import { WordDetailsModel } from '../../models/word-details.model';

@Component({
  selector: 'app-word-details',
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.css']
})
export class WordDetailsComponent implements OnInit {
  @Input() wordDetails: WordDetailsModel;

  @Output() addWordToList = new EventEmitter<AddWordListItemModel>();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onAddWordToList(detailsIndex): void {
    const listItem = new AddWordListItemModel();
    listItem.word = this.wordDetails.word;
    listItem.wordDefinition = this.wordDetails.results[detailsIndex];

    this.addWordToList.emit(listItem);
  }
}
