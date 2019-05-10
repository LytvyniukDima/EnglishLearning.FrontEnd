import { Component, OnInit, Input } from '@angular/core';
import { EnglishTextInfoModel } from '../models/EnglishTextInfoModel';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-text-list-card',
  templateUrl: './text-list-card.component.html',
  styleUrls: ['./text-list-card.component.css']
})
export class TextListCardComponent implements OnInit {
  @Input() textInfo: EnglishTextInfoModel;
  public imgUrl;

  constructor(private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.textInfo.englishLevel === 'None')
      this.textInfo.englishLevel = 'For all levels';

    this.imgUrl = this.sanitizer.bypassSecurityTrustResourceUrl('...');
  }

}
