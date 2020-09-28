import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { EnglishVideoModel } from '../models/EnglishVideoModel';
import { EnglishVideoFullFilterModel } from '../models/EnglishVideoFullFilterModel';
import { EnglishTextModel } from '../models/EnglishTextModel';
import { EnglishTextInfoModel } from '../models/EnglishTextInfoModel';
import { EnglishTextFullFilterModel } from '../models/EnglishTextFullFilterModel';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  private readonly videosRandomFullPath: string;
  private readonly videosFullPath: string;
  private readonly videosFiltersPath: string;
  private readonly videosRandomSearchPath: string;

  private readonly textRandomInfoPath: string;
  private readonly textFullPath: string;
  private readonly textFiltersPath: string;
  private readonly textRandomSearchPath: string;

  private readonly apiBaseUrl: string;

  scrollParent: any;

  scrolledValue = 0;
  isScrolling = false;

  constructor(private http: HttpClient, private router: Router) {
    this.apiBaseUrl = environment['ApiBaseUrl'];
    this.videosRandomFullPath = this.apiBaseUrl.concat('/api/multimedia/random/video');
    this.videosFullPath = this.apiBaseUrl.concat('/api/multimedia/video');
    this.videosFiltersPath = this.apiBaseUrl.concat('/api/multimedia/filters/video/full');
    this.videosRandomSearchPath = this.apiBaseUrl.concat('/api/multimedia/random/search/video');
    
    this.textRandomInfoPath = this.apiBaseUrl.concat('/api/multimedia/random/info/text');
    this.textFullPath = this.apiBaseUrl.concat('/api/multimedia/text');
    this.textFiltersPath = this.apiBaseUrl.concat('/api/multimedia/filters/text/full');
    this.textRandomSearchPath = this.apiBaseUrl.concat('/api/multimedia/random/info/search/text');
  }

  getRandomFullVideosList(count = 30) {
    let uri = this.videosRandomFullPath.concat('/' + count.toString());

    return this.http.get<EnglishVideoModel[]>(uri);
  }

  getFullVideoById(id: string) {
    let uri = this.videosFullPath.concat('/' + id);

    return this.http.get<EnglishVideoModel>(uri);
  }

  getFullVideoFilter() {
      return this.http.get<EnglishVideoFullFilterModel>(this.videosFiltersPath);
  }

  getFilteredRandomVideos(phrase: string, englishLevels: string[], videoTypes: string[], count = 30) {
    let uri = this.videosRandomSearchPath.concat('/' + count.toString() + '?');

    if (phrase && phrase.length > 0) {
        uri = uri.concat('phrase=' + phrase + '&');
    }

    englishLevels.forEach((value) => {
        uri = uri.concat('englishLevel=' + value + '&');
    })

    videoTypes.forEach((value) => {
      uri = uri.concat('videoType=' + value + '&');
    })

    if (uri.endsWith('&'))
        uri = uri.substring(0, uri.length - 1);

    return this.http.get<EnglishVideoModel[]>(uri);
  }

  getRandomInfoTextsList(count = 30) {
    let uri = this.textRandomInfoPath.concat('/' + count.toString());

    return this.http.get<EnglishTextInfoModel[]>(uri);
  }

  getFullTextById(id: string) {
    let uri = this.textFullPath.concat('/' + id);

    return this.http.get<EnglishTextModel>(uri);
  }

  getFullTextFilter() {
      return this.http.get<EnglishTextFullFilterModel>(this.textFiltersPath);
  }

  getFilteredRandomTexts(phrase: string, englishLevels: string[], textTypes: string[], count = 30) {
    let uri = this.textRandomSearchPath.concat('/' + count.toString() + '?');

    if (phrase && phrase.length > 0) {
        uri = uri.concat('phrase=' + phrase + '&');
    }

    englishLevels.forEach((value) => {
        uri = uri.concat('englishLevel=' + value + '&');
    })

    textTypes.forEach((value) => {
      uri = uri.concat('textType=' + value + '&');
    })

    if (uri.endsWith('&'))
        uri = uri.substring(0, uri.length - 1);

    return this.http.get<EnglishTextInfoModel[]>(uri);
  }
}
