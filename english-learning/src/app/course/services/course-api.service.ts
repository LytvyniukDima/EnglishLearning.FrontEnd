import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AddLearnedWordsCommandModel } from "../models/add-learned-words-command.model";
import { CompleteTaskCommandModel } from "../models/complete-task-command.model";
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
    private readonly completeBasePath: string;
    private readonly completeTaskPath: string;
    private readonly completeWordsPath: string;
    private readonly topicWordsBasePath: string;

    constructor(private httpClient: HttpClient) {
        this.apiBaseUrl = environment['ApiBaseUrl'];
        this.courseItemPath = this.apiBaseUrl.concat('/api/course/item');
        this.taskTrainBasePath = this.apiBaseUrl.concat('/api/course/train/task');
        this.dictionaryTrainBasePath = this.apiBaseUrl.concat('/api/course/train/dictionary');
        this.completeBasePath = `${this.apiBaseUrl}/api/course/completed`;
        this.completeTaskPath = `${this.completeBasePath}/task`;
        this.completeWordsPath = `${this.completeBasePath}/words`;
        this.topicWordsBasePath = `${this.apiBaseUrl}/api/course/dictionary/words`;
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

    completeTask(completeModel: CompleteTaskCommandModel): Observable<any> {
        return this.httpClient.post(this.completeTaskPath, completeModel);
    }

    completeWords(learnedWords: AddLearnedWordsCommandModel): Observable<any> {
        return this.httpClient.post(this.completeWordsPath, learnedWords);
    }

    getTopicWords(topic: string): Observable<string[]> {
        const url = `${this.topicWordsBasePath}/${topic}`;
        return this.httpClient.get<string[]>(url);
    }
}