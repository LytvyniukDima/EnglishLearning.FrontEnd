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

  public columnDefs = [{ field: 'extension' }, { field: 'lastModified' }];
  public defaultColDef = { flex: 1 };
  public autoGroupColumnDef = {
    headerName: 'Name',
    minWidth: 300,
    cellRendererParams: { suppressCount: true },
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
