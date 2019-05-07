import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { EnglishTaskInfoModel } from '../models/EnglishTaskInfoModel';
import { EnglishTaskModel } from '../models/EnglishTaskModel';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private readonly tasksInfoPath: string;
  private readonly tasksRandomInfoPath: string;
  private readonly tasksFullPath: string;

  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.apiBaseUrl = environment['ApiBaseUrl'];
    this.tasksInfoPath = this.apiBaseUrl.concat('/api/tasks/info');
    this.tasksRandomInfoPath = this.apiBaseUrl.concat('/api/tasks/info/random');
    this.tasksFullPath = this.apiBaseUrl.concat('/api/tasks/full');
  }

  getRandomTasksInfoList(count = 30) {
    let uri = this.tasksRandomInfoPath.concat('/' + count.toString());

    return this.http.get<EnglishTaskInfoModel[]>(uri);
  }

  getFullTaskById(id: string) {
    let uri = this.tasksFullPath.concat('/' + id);

    return this.http.get<EnglishTaskModel>(uri);
  }

  getFilteredRandomInfoTasks(englishLevels: string[], grammarParts: string[], count = 30) {
    let uri = this.tasksRandomInfoPath.concat('/' + count.toString() + '/filter?');

    englishLevels.forEach((value) => {
        uri = uri.concat('englishLevel=' + value + '&');
    })

    grammarParts.forEach((value) => {
      uri = uri.concat('grammarPart=' + value + '&');
    })

    if (uri.endsWith('&'))
        uri = uri.substring(0, uri.length - 1);

    return this.http.get<EnglishTaskInfoModel[]>(uri);
  }
}
