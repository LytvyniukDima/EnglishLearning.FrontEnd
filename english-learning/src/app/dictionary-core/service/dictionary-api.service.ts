import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AddWordListItemModel } from "../models/add-word-list-item.model";
import { WordListItemModel } from "../models/word-list-item.model";
import { WordSearchModel } from "../models/word-search.model";

@Injectable({
    providedIn: 'root'
})
export class DictionaryApiService {
    private readonly baseWordPath: string;
    private readonly baseWordListPath: string;

    private readonly apiBaseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.apiBaseUrl = environment['ApiBaseUrl'];
        this.baseWordPath = this.apiBaseUrl.concat('/api/dictionary/word');
        this.baseWordListPath = this.apiBaseUrl.concat('/api/dictionary/list');
    }

    searchWord(word: string): Observable<WordSearchModel> {
        const url = `${this.baseWordPath}/${word}`;

        return this.httpClient.get<WordSearchModel>(url);
    }

    addWordToList(item: AddWordListItemModel): Observable<any> {
        return this.httpClient.post(this.baseWordListPath, item);
    }

    getWordList(): Observable<WordListItemModel> {
        return this.httpClient.get<WordListItemModel>(this.baseWordListPath);
    }
}