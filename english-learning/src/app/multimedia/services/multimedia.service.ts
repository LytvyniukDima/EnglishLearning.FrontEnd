import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { EnglishVideoModel } from '../models/EnglishVideoModel';
import { EnglishVideoFullFilterModel } from '../models/EnglishVideoFullFilterModel';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  private readonly videosRandomFullPath: string;
  private readonly videosFullPath: string;
  private readonly videosFiltersPath: string;
  private readonly videosRandomSearchPath: string;

  private readonly apiBaseUrl: string;

  @ViewChild('scroll') private scrollContainer: ElementRef;
  scrollParent: any;

  scrolledValue = 0;
  isScrolling = false;

  constructor(private http: HttpClient, private router: Router) {
    this.apiBaseUrl = environment['ApiBaseUrl'];
    this.videosRandomFullPath = this.apiBaseUrl.concat('/api/multimedia/random/video');
    this.videosFullPath = this.apiBaseUrl.concat('/api/multimedia/video');
    this.videosFiltersPath = this.apiBaseUrl.concat('/api/multimedia/filters/video/full');
    this.videosRandomSearchPath = this.apiBaseUrl.concat('/api/multimedia/random/search/video');
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

  onScroll() {
    let element: HTMLElement = document.getElementById('scroll2');
    console.log(element)

    let scrollFunc = function (node: HTMLElement): HTMLElement {
      if (node.parentElement == null) {
        return node;
      }

      if (node.scrollHeight > node.clientHeight) {
        return node;
      } else {
        return scrollFunc(node.parentElement);
      }
    }

    let newScrollParent = scrollFunc(element);

    let scrolledValue = newScrollParent.scrollTop + newScrollParent.clientHeight;
    let maxScroll = newScrollParent.scrollHeight - 20;

    if (scrolledValue > this.scrolledValue && scrolledValue > maxScroll && !this.isScrolling) {
      console.log("needScroll");
      this.isScrolling = true;
      this.onScrollLoad();
    }
    this.scrolledValue = scrolledValue;
  }

  getScrollParent(node) {
    if (node.parentNode == null) {
      return node;
    }

    if (node.scrollHeight > node.clientHeight) {
      return node;
    } else {
      return this.getScrollParent(node.parentNode);
    }
  }

  onScrollLoad() {
    if (this.englishLevelsFromSearch.length > 0 || this.grammarPartsFromSearch.length > 0) {
      this.tasksService.getFilteredRandomInfoTasks(this.englishLevelsFromSearch, this.grammarPartsFromSearch).subscribe(data => {
        this.taskInfoList = this.taskInfoList.concat(data);
        this.tasksMapper.fixNamingsForInfoModels(this.taskInfoList);
        this.isScrolling = false;
      },
        (err: HttpErrorResponse) => {
          this.isScrolling = false;
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        })
    } else {
      this.tasksService.getRandomTasksInfoList().subscribe(data => {
        this.taskInfoList = this.taskInfoList.concat(data);
        console.log(this.taskInfoList);
        this.tasksMapper.fixNamingsForInfoModels(this.taskInfoList);
        this.isScrolling = false;
      },
        (err: HttpErrorResponse) => {
          this.isScrolling = false;
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        });
    }
  }
}
