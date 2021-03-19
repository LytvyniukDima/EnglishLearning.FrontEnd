import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { WordSearchModel } from "../models/word-search.model";

@Injectable({
    providedIn: 'root'
})
export class DictionaryApiService {
    private readonly baseWordPath: string;

    private readonly apiBaseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.apiBaseUrl = environment['ApiBaseUrl'];
        this.baseWordPath = this.apiBaseUrl.concat('/api/dictionary/word');
    }

    searchWord(word: string): Observable<WordSearchModel> {
        const url = `${this.baseWordPath}/${word}`;

        return this.httpClient.get<WordSearchModel>(url);
    }
}