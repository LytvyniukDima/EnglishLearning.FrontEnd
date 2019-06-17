import { Component, OnInit, PipeTransform, Input } from '@angular/core';
import { EnglishVideoModel } from '../models/EnglishVideoModel';
import { DomSanitizer } from '@angular/platform-browser';
import { MultimediaService } from '../services/multimedia.service';
import { ActivatedRoute } from '@angular/router';
import { MultimediaStatisticService } from '../services/multimedia-statistic.service';
import { AuthService } from 'src/app/authorization/serives/auth.service';
import { CompletedEnglishMultimediaCreationModel } from '../models/CompletedEnglishMultimediaCreationModel';
import { MultimediaType } from '../models/MultimediaType';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  public videoModel: EnglishVideoModel;
  public videoUrl;
  public transcription: string[];

  constructor(
    private sanitizer: DomSanitizer,
    private multimediaService: MultimediaService,
    private route: ActivatedRoute,
    private authService: AuthService, 
    private statisticService: MultimediaStatisticService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.getVideo(id);
  }

  getVideo = async (id) => {
    await this.multimediaService
      .getFullVideoById(id)
      .toPromise()
      .then(data => {
        this.videoModel = data;

        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoModel.apiId}`);
        this.transcription = this.videoModel.transcription.split('\n');

        this.sendCompletedVideo();
      })
  }

  sendCompletedVideo() {
    console.log('completed video')
    if (!this.authService.isAuthentificated)
      return;

    let completedMultimedia = new CompletedEnglishMultimediaCreationModel();
    completedMultimedia.contentId = this.videoModel.id;
    completedMultimedia.englishLevel = this.videoModel.englishLevel;
    completedMultimedia.date = new Date(Date.now());
    completedMultimedia.tittle = this.videoModel.title;
    completedMultimedia.multimediaType = MultimediaType[MultimediaType.Video];
    completedMultimedia.contentType = this.videoModel.videoType;
    
    this.statisticService.createCompletedEnglishMultimedia(completedMultimedia).subscribe(data => {

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
