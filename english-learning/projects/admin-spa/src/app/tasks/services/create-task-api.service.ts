import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CreateTaskFromRandomModel } from "../models/create-task-from-random.model";

@Injectable({
    providedIn: 'root'
})
export class CreateTaskApiService {
    private readonly baseTaskFromItemsPath: string;

    private readonly apiBaseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.apiBaseUrl = environment['ApiBaseUrl'];
        this.baseTaskFromItemsPath = this.apiBaseUrl.concat('/api/tasks/full/from-items');
    }

    createFromRandomItems(model: CreateTaskFromRandomModel): Observable<any> {
        const url = `${this.baseTaskFromItemsPath}/random`;

        return this.httpClient.post(url, model);
    }
}