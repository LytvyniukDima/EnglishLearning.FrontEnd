import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { CompletedEnglishMultimediaCreationModel } from '../models/CompletedEnglishMultimediaCreationModel';

@Injectable({
  providedIn: 'root'
})
export class MultimediaStatisticService {
  private readonly tasksCompletedPath: string;

  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.apiBaseUrl = environment['ApiBaseUrl'];
    this.tasksCompletedPath = this.apiBaseUrl.concat('/api/statistic/completed/multimedia');
  }

  createCompletedEnglishMultimedia(model: CompletedEnglishMultimediaCreationModel) {
    return this.http.post<any>(this.tasksCompletedPath, model);
  }
}
