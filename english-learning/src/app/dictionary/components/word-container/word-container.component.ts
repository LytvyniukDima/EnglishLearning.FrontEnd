import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-container',
  templateUrl: './word-container.component.html',
  styleUrls: ['./word-container.component.css']
})
export class WordContainerComponent implements OnInit {
  public word: string;
  public textSearch: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(): void {
    this.word = this.textSearch;
  }

  onChangeSearchField(event) {
    this.textSearch = event.target.value;
  }

  isWordDefined(): boolean {
    return this.word && !!this.word.trim();
  }
}
