import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { GridTreeItemModel } from '../../models/grid-tree-item.model';
import { Grid } from 'ag-grid-community';

@Component({
  selector: 'admin-uploaded-files-list',
  templateUrl: './uploaded-files-list.component.html',
  styleUrls: ['./uploaded-files-list.component.scss']
})
export class UploadedFilesListComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  @Input() gridItems: GridTreeItemModel[];

  @Output() downloadFile = new EventEmitter<string>();
  @Output() uploadFile = new EventEmitter<string>();

  public components = { fileCellRenderer: getFileCellRenderer() };
  public columnDefs = [
    { 
      field: 'extension',
      suppressMenu: true
    },
    { 
      field: 'lastModified',
      suppressMenu: true
    },
  ];
  public defaultColDef = { flex: 1 };
  public autoGroupColumnDef = {
    headerName: 'Name',
    minWidth: 300,
    cellRendererParams: { 
      suppressCount: true,
      innerRenderer: 'fileCellRenderer',
    },
    suppressMenu: true
  };
  public groupDefaultExpanded = -1;
  public getDataPath = function (data: GridTreeItemModel) {
    return data.path;
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  getContextMenuItems = (params) => {
    const gridItem: GridTreeItemModel = params.node?.data;

    const contextItems = [
      {
        name: 'analyse file(s)',
        action: () => this.onanalyseItemClick(gridItem),
        cssClasses: [],
        icon: '<span class="material-icons">analytics</span>'
      },
      'separator'
    ];

    if (gridItem !== undefined && !gridItem.isFolder) {
      contextItems.push({
        name: 'Download file',
        action: () => this.onDownloadItemClick(gridItem),
        cssClasses: [],
        icon: '<span class="material-icons">cloud_download</span>'
      });
    } else {
      contextItems.push({
        name: 'Upload file',
        action: () => this.onUploadItemClick(gridItem),
        cssClasses: [],
        icon: '<span class="material-icons">cloud_upload</span>'
      });
    }

    return contextItems;
  }

  public onUploadItemClick(item: GridTreeItemModel) {
    const folderId = item?.id ?? null;

    this.uploadFile.emit(folderId);
  }

  public onDownloadItemClick(item: GridTreeItemModel) {
    this.downloadFile.emit(item.id);
  }

  public onanalyseItemClick(item: GridTreeItemModel) {
    console.log(item);
  }
}

function getFileCellRenderer() {
  function FileCellRenderer() {}
  FileCellRenderer.prototype.init = function (params) {
    var tempDiv = document.createElement('div');
    var value = params.value;
    var data = params.data;

    var icon;
    if (data.isFolder) {
      icon = 'folder_open';
    } else {
      icon = 'text_snippet';
    }

    tempDiv.innerHTML = icon
      ? '<span class="filename"><i class="material-icons center-icon">' +
        icon +
        '</i>' +
        '<span></span>' +
        value +
        '</span>'
      : value;
    this.eGui = tempDiv.firstChild;
  };
  FileCellRenderer.prototype.getGui = function () {
    return this.eGui;
  };
  return FileCellRenderer;
}
