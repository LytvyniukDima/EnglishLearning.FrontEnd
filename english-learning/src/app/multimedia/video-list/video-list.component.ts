import { Component, OnInit } from '@angular/core';
import { EnglishVideoModel } from '../models/EnglishVideoModel';
import { MultimediaService } from '../services/multimedia.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  public videoList: EnglishVideoModel[];

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit() {
    this.getVideos();
  }

  getVideos() {
    this.multimediaService.getRandomFullVideosList().subscribe(data => {
      console.log(data);
      this.videoList = data;
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      })
  }
}
