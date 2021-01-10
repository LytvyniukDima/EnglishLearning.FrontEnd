export interface FileTreeItemModel {
    id: string;
    name: string;
    path: string[];
    extension: string;
    lastModified: Date;
    createdBy: string;
    metadata: Map<string, string>;
}
