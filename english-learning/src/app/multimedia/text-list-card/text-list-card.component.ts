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

    let img = this.getImagePath();
    this.imgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(img);
  }

  routing() {
    this.router.navigate([`/multimedia/text/${this.textInfo.id}`]);
  }

  getImagePath(): string {
    switch(this.textInfo.textType)
    {
      case 'Poem': {
        return '../../../assets/poem.png'
      }
      case 'Book Fragment': {
        return '../../../assets/book.jpg'
      }
      case 'Story': {
        return '../../../assets/story.jpg'
      }
      case 'Tragedy fragment': {
        return '../../../assets/tradegy.jpg'
      }
      default: {
        return '../../../assets/text.jpg'
      }
    }
  }
}
