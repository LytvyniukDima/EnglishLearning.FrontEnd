import { FileTreeItemModel } from "./file-tree-item.model";
import { FolderTreeItemModel } from "./folder-tree-item.model";

export interface FileTreeModel {
    folders: FolderTreeItemModel[];
    files: FileTreeItemModel[];
}
