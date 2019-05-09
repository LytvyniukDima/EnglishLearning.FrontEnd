import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { EnglishVideoModel } from '../models/EnglishVideoModel';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  private readonly videosRandomFullPath: string;
  private readonly videosFullPath: string;

  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.apiBaseUrl = environment['ApiBaseUrl'];
    this.videosRandomFullPath = this.apiBaseUrl.concat('/api/multimedia/random/video');
    this.videosFullPath = this.apiBaseUrl.concat('/api/multimedia/video');
  }

  getRandomFullVideosList(count = 30) {
    let uri = this.videosRandomFullPath.concat('/' + count.toString());

    return this.http.get<EnglishVideoModel[]>(uri);
  }

  getFullVideoById(id: string) {
    let uri = this.videosFullPath.concat('/' + id);

    return this.http.get<EnglishVideoModel>(uri);
  }

//   getFilteredRandomInfoTasks(englishLevels: string[], grammarParts: string[], count = 30) {
//     let uri = this.tasksRandomInfoPath.concat('/' + count.toString() + '/filter?');

//     englishLevels.forEach((value) => {
//         uri = uri.concat('englishLevel=' + value + '&');
//     })

//     grammarParts.forEach((value) => {
//       uri = uri.concat('grammarPart=' + value + '&');
//     })

//     if (uri.endsWith('&'))
//         uri = uri.substring(0, uri.length - 1);

//     return this.http.get<EnglishTaskInfoModel[]>(uri);
//   }
}
