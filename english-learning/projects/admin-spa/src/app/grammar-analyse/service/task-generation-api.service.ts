import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { TaskGenerationModel } from "../models/task-generation.model";

@Injectable({
    providedIn: 'root',
})
export class TaskGenerationApiService {
    private readonly apiBaseUrl: string;

    private readonly baseGrammerFileAnalseUrl = 'api/tasks/generate';

    constructor(private httpClient: HttpClient) {
        this.apiBaseUrl = environment['ApiBaseUrl'];
    }

    generateTasks(generationModel: TaskGenerationModel): Observable<any> {
        const url = `${this.apiBaseUrl}/${this.baseGrammerFileAnalseUrl}`;

        return this.httpClient.post(url, generationModel);
    }
}