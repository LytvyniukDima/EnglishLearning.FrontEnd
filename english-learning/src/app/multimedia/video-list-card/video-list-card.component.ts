import { Component, OnInit, Input } from '@angular/core';
import { EnglishVideoModel } from '../models/EnglishVideoModel';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-list-card',
  templateUrl: './video-list-card.component.html',
  styleUrls: ['./video-list-card.component.css']
})
export class VideoListCardComponent implements OnInit {
  @Input() videoInfo: EnglishVideoModel;
  public englishLevelColor: string;
  public imgUrl;

  constructor(private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.videoInfo.englishLevel === 'None')
      this.videoInfo.englishLevel = 'For all levels';

    this.imgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://img.youtube.com/vi/${this.videoInfo.apiId}/mqdefault.jpg`)
  }

  routing() {
    this.router.navigate([`/multimedia/video/${this.videoInfo.id}`]);
  }
}
