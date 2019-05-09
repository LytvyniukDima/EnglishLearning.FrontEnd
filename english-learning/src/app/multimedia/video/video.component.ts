import { Component, OnInit, PipeTransform, Input } from '@angular/core';
import { EnglishVideoModel } from '../models/EnglishVideoModel';
import { DomSanitizer } from '@angular/platform-browser';
import { MultimediaService } from '../services/multimedia.service';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
    ) { }

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
      })
  }
}
