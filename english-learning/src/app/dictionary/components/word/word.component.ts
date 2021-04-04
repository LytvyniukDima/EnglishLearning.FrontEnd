import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  word: string;

  constructor(private route: ActivatedRoute) { 
    this.word = this.route.snapshot.paramMap.get('word');
  }

  ngOnInit(): void {
  }
}
