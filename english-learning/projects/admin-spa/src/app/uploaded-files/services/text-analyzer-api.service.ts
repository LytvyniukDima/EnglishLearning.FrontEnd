import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AnalyzeFileForm } from "../models/analyze-file-form";

@Injectable({
    providedIn: 'root',
})
export class TextAnalyzerApiService {
    private readonly apiBaseUrl: string;

    private readonly baseTextAnalzeUrl = 'api/text-analyzer';
    private readonly parseTaskUrl = `${this.baseTextAnalzeUrl}/parse/task`;

    constructor(private httpClient: HttpClient) {
        this.apiBaseUrl = environment['ApiBaseUrl'];
    }

    analyzeFile(analyzeFileForm: AnalyzeFileForm): Observable<any> {
        const url = `${this.apiBaseUrl}/${this.parseTaskUrl}`;

        return this.httpClient.post(url, analyzeFileForm);
    }
}