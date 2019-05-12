import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { CompletedEnglishTaskCreationModel } from '../models/CompletedEnglishTaskCreationModel';

@Injectable({
  providedIn: 'root'
})
export class TasksStatisticService {
  private readonly tasksCompletedPath: string;

  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.apiBaseUrl = environment['ApiBaseUrl'];
    this.tasksCompletedPath = this.apiBaseUrl.concat('/api/statistic/completed/task');
  }

  createCompletedEnglishTask(model: CompletedEnglishTaskCreationModel) {
    return this.http.post<any>(this.tasksCompletedPath, model);
  }
}
