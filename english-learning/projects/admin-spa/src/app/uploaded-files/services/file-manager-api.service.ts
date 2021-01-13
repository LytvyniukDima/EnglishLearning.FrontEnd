import { HttpClient, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { FileTreeModel } from "../models/file-tree.model";
import { FolderInfoModel } from "../models/folder-info.model";

@Injectable({
    providedIn: 'root',
})
export class FileManagerApiService {
    private readonly apiBaseUrl: string;

    private readonly baseFileManagerUrl = 'api/file-manager'
    private readonly treeUrl = `${this.baseFileManagerUrl}/tree`;
    private readonly downloadFileUrl = `${this.baseFileManagerUrl}/file`;
    private readonly folderUrl = `${this.baseFileManagerUrl}/folder`;

    constructor(private httpClient: HttpClient) {
        this.apiBaseUrl = environment['ApiBaseUrl'];
    }

    getTree(): Observable<FileTreeModel> {
        const url = `${this.apiBaseUrl}/${this.treeUrl}`;

        return this.httpClient.get<FileTreeModel>(url);
    }

    downloadFile(id: string): Observable<HttpResponse<Blob>> {
        const url = `${this.apiBaseUrl}/${this.downloadFileUrl}/${id}`;

        return this.httpClient.get(url, {responseType: 'blob', observe: 'response'});
    }

    getFolderInfo(id: string): Observable<FolderInfoModel> {
        const url = `${this.apiBaseUrl}/${this.folderUrl}/${id}/info`;

        return this.httpClient.get<FolderInfoModel>(url);
    }
}
