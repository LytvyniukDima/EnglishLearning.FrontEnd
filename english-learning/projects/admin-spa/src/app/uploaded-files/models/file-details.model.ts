export class FileDetailsModel {
    id: string;
    name: string;
    path: string[];
    extension: string;
    lastModified: string;
    createdBy: string;
    metadata: { [key: string]: string };
    folderId: number;
}
