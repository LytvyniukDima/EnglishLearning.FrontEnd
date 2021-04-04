import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  @Input() words: string[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onWordClick(word: string): void {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([`/dictionary/details/${word}`]));
  }
}
