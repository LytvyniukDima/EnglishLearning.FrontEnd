import { Component, OnInit } from '@angular/core';
import { EnglishTextModel } from '../models/EnglishTextModel';
import { MultimediaService } from '../services/multimedia.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/authorization/serives/auth.service';
import { MultimediaStatisticService } from '../services/multimedia-statistic.service';
import { CompletedEnglishMultimediaCreationModel } from '../models/CompletedEnglishMultimediaCreationModel';
import { MultimediaType } from '../models/MultimediaType';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  public textModel = new EnglishTextModel;
  public text: string[];

  constructor(
    private multimediaService: MultimediaService,
    private route: ActivatedRoute,
    private authService: AuthService, 
    private statisticService: MultimediaStatisticService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    
    this.getText(id);
  }

  getText = async (id) => {
    await this.multimediaService
      .getFullTextById(id)
      .toPromise()
      .then(data => {
        this.textModel = data;

        this.text = this.textModel.text.split('\n');

        this.sendCompletedText();
      })
  }

  sendCompletedText() {
    console.log('completed video')
    if (!this.authService.isAuthentificated)
      return;

    let completedMultimedia = new CompletedEnglishMultimediaCreationModel();
    completedMultimedia.contentId = this.textModel.id;
    completedMultimedia.englishLevel = this.textModel.englishLevel;
    completedMultimedia.date = new Date(Date.now());
    completedMultimedia.tittle = this.textModel.headLine;
    completedMultimedia.multimediaType = MultimediaType[MultimediaType.Text];

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
