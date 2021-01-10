import { Component, Input, OnInit } from '@angular/core';
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

  public components = { fileCellRenderer: getFileCellRenderer() };
  public columnDefs = [{ field: 'extension' }, { field: 'lastModified' }];
  public defaultColDef = { flex: 1 };
  public autoGroupColumnDef = {
    headerName: 'Name',
    minWidth: 300,
    cellRendererParams: { 
      suppressCount: true,
      innerRenderer: 'fileCellRenderer',
    },
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
