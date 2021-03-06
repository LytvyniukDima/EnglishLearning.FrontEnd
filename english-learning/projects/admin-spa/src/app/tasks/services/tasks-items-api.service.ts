import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { TaskItemModel } from "../models/task-item.model";
import { TaskItemsParametersModel } from "../models/task-items-parameters.model";

@Injectable({
    providedIn: 'root'
})
export class TasksItemsApiService {
    private readonly baseItemsPath: string;

    private readonly apiBaseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.apiBaseUrl = environment['ApiBaseUrl'];
        this.baseItemsPath = this.apiBaseUrl.concat('/api/tasks/item');
    }

    getFilterOptions(): Observable<TaskItemsParametersModel> {
        const url = `${this.baseItemsPath}/filter-options`;

        return this.httpClient.get<TaskItemsParametersModel>(url);
    }

    getTaskItems(parameters: TaskItemsParametersModel): Observable<TaskItemModel> {
        const params = {
            grammarPart: parameters.grammarPart,
            sentType: parameters.sentType,
            taskType: parameters.taskType,
            englishLevel: parameters.englishLevel,
        };

        return this.httpClient.get<TaskItemModel>(this.baseItemsPath, { params });
    }
}