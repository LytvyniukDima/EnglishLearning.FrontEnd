export class UploadNewFileModel {
    name: string;
    folderId: string;
    metadata: { [key: string]: string };
    uploadedFile: File;
    csvColumnToRead: string;
}
