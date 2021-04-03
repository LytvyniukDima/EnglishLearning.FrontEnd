import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CourseItemModel } from "../models/course-item.model";
import { DictionaryTrainModel } from "../models/dictionary-train.model";
import { TaskTrainModel } from "../models/task-train.model";

@Injectable({
    providedIn: 'root'
})
export class CourseApiService {
    private readonly apiBaseUrl: string;

    private readonly courseItemPath: string;
    private readonly taskTrainBasePath: string;
    private readonly dictionaryTrainBasePath: string;

    constructor(private httpClient: HttpClient) {
        this.apiBaseUrl = environment['ApiBaseUrl'];
        this.courseItemPath = this.apiBaseUrl.concat('/api/course/item');
        this.taskTrainBasePath = this.apiBaseUrl.concat('/api/course/train/task');
        this.dictionaryTrainBasePath = this.apiBaseUrl.concat('/api/course/train/dictionary');
    }

    getItems(): Observable<CourseItemModel[]> {
        return this.httpClient.get<CourseItemModel[]>(this.courseItemPath);
    }

    getTaskTrainModel(grammarPart: string): Observable<TaskTrainModel> {
        const url = `${this.taskTrainBasePath}/${grammarPart}`;
        return this.httpClient.get<TaskTrainModel>(url);
    }

    getDictionaryTrainModel(topic: string): Observable<DictionaryTrainModel> {
        const url = `${this.dictionaryTrainBasePath}/${topic}`;
        return this.httpClient.get<DictionaryTrainModel>(url);
    }
}