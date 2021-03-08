import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CreateTaskFromItemsModel } from "../models/create-task-from-items.model";
import { CreateTaskFromRandomModel } from "../models/create-task-from-random.model";
import { TaskModel } from "../models/task.model";

@Injectable({
    providedIn: 'root'
})
export class CreateTaskApiService {
    private readonly baseTaskFullPath: string;
    private readonly baseTaskFromItemsPath: string;
    private readonly apiBaseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.apiBaseUrl = environment['ApiBaseUrl'];
        this.baseTaskFullPath = this.apiBaseUrl.concat('/api/tasks/full');
        this.baseTaskFromItemsPath = `${this.baseTaskFullPath}/from-items`;
    }

    createFromRandomItems(model: CreateTaskFromRandomModel): Observable<any> {
        const url = `${this.baseTaskFromItemsPath}/random`;

        return this.httpClient.post(url, model);
    }

    createFromItems(model: CreateTaskFromItemsModel): Observable<any> {
        return this.httpClient.post(this.baseTaskFromItemsPath, model);
    }

    getAllTasks(): Observable<TaskModel[]> {
        return this.httpClient.get<TaskModel[]>(this.baseTaskFullPath);
    }
}