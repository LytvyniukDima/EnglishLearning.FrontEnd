import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { GroupedCompletedStatisticModel } from '../models/GroupedCompletedStatisticModel';

@Injectable({
  providedIn: 'root'
})
export class CompletedStatisticService {
  private readonly completedStatisticPath: string;

  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.apiBaseUrl = environment['ApiBaseUrl'];
    this.completedStatisticPath = this.apiBaseUrl.concat('/api/statistic/completed');
  }

  getCompletedStatistic() {
    return this.http.get<GroupedCompletedStatisticModel[]>(this.completedStatisticPath);
  }
}
