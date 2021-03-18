import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-word-container',
  templateUrl: './word-container.component.html',
  styleUrls: ['./word-container.component.css']
})
export class WordContainerComponent implements OnInit {
  public word_param: string;
  
  public textSearch = "";

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.word_param = this.route.snapshot.paramMap.get('word');
    console.log(this.word_param);
  }

  onSearch(): void {
    console.log(this.textSearch);
  }

  onChangeSearchField(event) {
    this.textSearch = event.target.value;
  }
}
