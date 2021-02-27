import { Component, Input, OnInit } from '@angular/core';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { TaskItemModel } from '../../models/task-item.model';

@Component({
  selector: 'admin-select-task-items-list',
  templateUrl: './select-task-items-list.component.html',
  styleUrls: ['./select-task-items-list.component.scss']
})
export class SelectTaskItemsListComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  @Input() taskItems: TaskItemModel[];

  public columnDefs = [
    {
      field: 'content',
      suppressMenu: true,
      width: 600,
    },
  ];
  public defaultColDef = { flex: 1 };
  public autoGroupColumnDef = {
    headerName: 'Group',
    suppressMenu: true,
  };
  public groupDefaultExpanded = -1;
  public getDataPath = function (data: TaskItemModel) {
    const fullPath = [];
    fullPath.push(data.taskType);
    fullPath.push(data.grammarPart);
    fullPath.push(data.sentType);
    fullPath.push(data.generationName);
    fullPath.push(data.id);

    return fullPath;
  };

  constructor() { }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridColumnApi.sizeColumnsToFit(1200);
  }

  getContextMenuItems = (params) => {
    return [];
  }
}
