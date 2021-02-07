import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { FileDetailsModel } from "../models/file-details.model";
import { FileTreeModel } from "../models/file-tree.model";
import { FolderInfoModel } from "../models/folder-info.model";
import { UploadNewFileModel } from "../models/upload-new-file.model";

@Injectable({
    providedIn: 'root',
})
export class FileManagerApiService {
    private readonly apiBaseUrl: string;

    private readonly baseFileManagerUrl = 'api/file-manager'
    private readonly treeUrl = `${this.baseFileManagerUrl}/tree`;
    private readonly baseFileUrl = `${this.baseFileManagerUrl}/file`;
    private readonly folderUrl = `${this.baseFileManagerUrl}/folder`;

    constructor(private httpClient: HttpClient) {
        this.apiBaseUrl = environment['ApiBaseUrl'];
    }

    getTree(): Observable<FileTreeModel> {
        const url = `${this.apiBaseUrl}/${this.treeUrl}`;

        return this.httpClient.get<FileTreeModel>(url);
    }

    downloadFile(id: string): Observable<HttpResponse<Blob>> {
        const url = `${this.apiBaseUrl}/${this.baseFileUrl}/${id}`;

        return this.httpClient.get(url, {responseType: 'blob', observe: 'response'});
    }

    getFolderInfo(id: string): Observable<FolderInfoModel> {
        const url = `${this.apiBaseUrl}/${this.folderUrl}/${id}/info`;

        return this.httpClient.get<FolderInfoModel>(url);
    }

    uploadNewFile(uploadFileModel: UploadNewFileModel): Observable<any> {
        const url = `${this.apiBaseUrl}/${this.baseFileUrl}`;

        const folderId = uploadFileModel.folderId !== null ? uploadFileModel.folderId : '';
        
        const formData: FormData = new FormData();
        formData.append('folderId', folderId);
        formData.append('name', uploadFileModel.name);
        formData.append('metadata', JSON.stringify(uploadFileModel.metadata));
        formData.append('uploadedFile', uploadFileModel.uploadedFile, uploadFileModel.uploadedFile.name);

        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        const options = { headers: headers };

        return this.httpClient.post(url, formData, options);
    }

    getFileDetails(fileId: string): Observable<FileDetailsModel> {
        const url = `${this.apiBaseUrl}/${this.baseFileUrl}/${fileId}/details`;

        return this.httpClient.get<FileDetailsModel>(url);
    }
}
