import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { EnglishTaskInfoModel } from '../models/EnglishTaskInfoModel';

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

    console.log(uri);

    return this.http.get<EnglishTaskInfoModel[]>(uri);
  }

//   signUp(credentials: SignUpModel) {
//     return this.http.post<any>(this.registrationPath, credentials);
//   }

//   signIn(credentials: SignInModel) {
//     return this.http.post<string>(this.authorizationPath, credentials, { responseType: 'text' as 'json' });
//   }

//   logout() {
//     localStorage.removeItem('token');
//     this.router.navigate(['']);
//   }

//   get isAuthentificated() {
//     return !!localStorage.getItem('token');
//   }
}
