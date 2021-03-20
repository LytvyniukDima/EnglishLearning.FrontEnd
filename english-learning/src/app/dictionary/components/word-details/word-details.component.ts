import { Component, Input, OnInit } from '@angular/core';
import { WordDetailsModel } from '../../models/word-details.model';

@Component({
  selector: 'app-word-details',
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.css']
})
export class WordDetailsComponent implements OnInit {
  @Input() wordDetails: WordDetailsModel;

  constructor() { }

  ngOnInit(): void {
  }

}
