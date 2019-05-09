import { Component, OnInit } from '@angular/core';
import { EnglishVideoModel } from '../models/EnglishVideoModel';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  public videoModel = new EnglishVideoModel;

  constructor() { }

  ngOnInit() {
    this.videoModel.id = 'dskd';
    this.videoModel.videoType = 'Trailer';
    this.videoModel.title = 'Spider-Man: Into the Spider-Verse Trailer';
    this.videoModel.englishLevel = 'Intermediate';
    this.videoModel.apiId = 'pphn8cJSApo';
  }
}
