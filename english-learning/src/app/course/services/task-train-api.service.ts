import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AudioTaskModel } from "src/app/tasks-core/models/audio-task.model";
import { EnglishTaskModel } from "src/app/tasks-core/models/EnglishTaskModel";
import { environment } from "src/environments/environment";
import { TaskTrainModel } from "../models/task-train.model";

@Injectable({
    providedIn: 'root'
})
export class TaskTrainApiService {
    private readonly apiBaseUrl: string;

    private readonly audioTaskPath: string;
    private readonly randomTaskPath: string;

    constructor(private httpClient: HttpClient) {
        this.apiBaseUrl = environment['ApiBaseUrl'];
        this.audioTaskPath = `${this.apiBaseUrl}/api/tasks/audio`;
        this.randomTaskPath = `${this.apiBaseUrl}/api/tasks/full/random`;
    }

    getAudioTask(trainModel: TaskTrainModel): Observable<AudioTaskModel> {
        return this.httpClient.post<AudioTaskModel>(this.audioTaskPath, trainModel);
    }

    getRandomTask(trainModel: TaskTrainModel): Observable<EnglishTaskModel> {
        return this.httpClient.post<EnglishTaskModel>(this.randomTaskPath, trainModel);
    }
}