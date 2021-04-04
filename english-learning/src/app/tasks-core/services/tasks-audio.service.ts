import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class TasksAudioService {
    private readonly apiBaseUrl: string;

    private readonly audioBasePath: string;
    private readonly audioSentBasePath: string;

    constructor() {
        this.apiBaseUrl = environment['ApiBaseUrl'];
        this.audioBasePath = `${this.apiBaseUrl}/api/tasks/audio`;
        this.audioSentBasePath = `${this.audioBasePath}/sent`;
    }

    getAudioUrl(sentId: string): string {
        return `${this.audioSentBasePath}/${sentId}`;
    }
}