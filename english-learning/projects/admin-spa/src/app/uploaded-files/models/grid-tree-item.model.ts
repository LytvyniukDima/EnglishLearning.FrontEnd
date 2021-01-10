export interface GridTreeItemModel {
    id: string;
    name: string;
    path: string[];
    isFolder: boolean;
    originalItem: any;
    extension?: string;
    lastModified?: string;
}
