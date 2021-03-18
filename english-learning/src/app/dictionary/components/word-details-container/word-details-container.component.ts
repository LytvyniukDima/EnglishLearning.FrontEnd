import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-details-container',
  templateUrl: './word-details-container.component.html',
  styleUrls: ['./word-details-container.component.css']
})
export class WordDetailsContainerComponent implements OnInit {
  @Input() word: string;

  constructor() { }

  ngOnInit(): void {
  }
}
