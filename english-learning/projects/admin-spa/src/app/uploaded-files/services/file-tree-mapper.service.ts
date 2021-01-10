import { Injectable } from "@angular/core";
import { Grid } from "ag-grid-community";
import { FileTreeModel } from "../models/file-tree.model";
import { GridTreeItemModel } from "../models/grid-tree-item.model";

@Injectable({
    providedIn: 'root',
})
export class FileTreeMapperService {
    public mapApiTreeToGridItems(fileTree: FileTreeModel): GridTreeItemModel[] {
        const folderItems: GridTreeItemModel[] = fileTree.folders
            .map(function(folder) {
                const newPath = folder.path;
                newPath.push(folder.name);
                
                return {
                    id: folder.id.toString(),
                    name: folder.name,
                    path: newPath,
                    isFolder: true,
                    originalItem: folder
                } as GridTreeItemModel
            });
        
        const fileItems: GridTreeItemModel[] = fileTree.files
            .map(function(file) {
                const newPath = file.path;
                newPath.push(file.name);

                return {
                    id: file.id,
                    name: file.name,
                    path: newPath,
                    isFolder: false,
                    extension: file.extension,
                    lastModified: new Date(file.lastModified).toLocaleString(),
                    originalItem: file
                } as GridTreeItemModel
            });

        return folderItems.concat(fileItems);
    }
}
