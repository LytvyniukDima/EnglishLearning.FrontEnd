import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class DictionaryAudioService {
    private readonly apiBaseUrl: string;

    private readonly audioBasePath: string;
    private readonly audioWordBasePath: string;

    constructor() {
        this.apiBaseUrl = environment['ApiBaseUrl'];
        this.audioBasePath = `${this.apiBaseUrl}/api/dictionary/audio`;
        this.audioWordBasePath = `${this.audioBasePath}/word`;
    }

    getAudioUrl(word: string): string {
        return `${this.audioWordBasePath}/${word}`;
    }
}