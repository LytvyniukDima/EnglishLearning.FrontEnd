import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { GrammarFileAnalysedModel } from "../models/grammar-file-analyzed.model";
import { ParsedSentModel } from "../models/parsed-sent.model";

@Injectable({
    providedIn: 'root',
})
export class GrammarAnalyseApiService {
    private readonly apiBaseUrl: string;

    private readonly baseGrammerFileAnalseUrl = 'api/tasks/grammarFileAnalyzed';

    constructor(private httpClient: HttpClient) {
        this.apiBaseUrl = environment['ApiBaseUrl'];
    }

    getAllGrammarAnalysis(): Observable<GrammarFileAnalysedModel[]> {
        const url = `${this.apiBaseUrl}/${this.baseGrammerFileAnalseUrl}`;

        return this.httpClient.get<GrammarFileAnalysedModel[]>(url);
    }

    getParsedSents(analyseId: string): Observable<ParsedSentModel[]> {
        const url = `${this.apiBaseUrl}/${this.baseGrammerFileAnalseUrl}/${analyseId}/parsedSents`;

        return this.httpClient.get<ParsedSentModel[]>(url);
    }
}