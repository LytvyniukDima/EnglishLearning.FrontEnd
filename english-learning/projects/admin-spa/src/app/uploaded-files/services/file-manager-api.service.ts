import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { FileTreeModel } from "../models/file-tree.model";

@Injectable({
    providedIn: 'root',
})
export class FileManagerApiService {
    private readonly apiBaseUrl: string;

    private readonly baseFileManagerUrl = 'api/file-manager'
    private readonly treeUrl = `${this.baseFileManagerUrl}/tree`;

    constructor(private httpClient: HttpClient) {
        this.apiBaseUrl = environment['ApiBaseUrl'];
    }

    getTree(): Observable<FileTreeModel> {
        const url = `${this.apiBaseUrl}/${this.treeUrl}`;

        return this.httpClient.get<FileTreeModel>(url);
    }
}
