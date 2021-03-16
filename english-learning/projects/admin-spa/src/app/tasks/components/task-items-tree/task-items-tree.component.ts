import { Component, Input, OnInit } from '@angular/core';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { TaskItemModel } from '../../models/task-item.model';

@Component({
  selector: 'admin-task-items-tree',
  templateUrl: './task-items-tree.component.html',
  styleUrls: ['./task-items-tree.component.scss']
})
export class TaskItemsTreeComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  @Input() taskItems: TaskItemModel[];

  public columnDefs = [
    {
      field: 'content',
      suppressMenu: true,
      minWidth: 800,
    },
  ];
  public defaultColDef = { flex: 1 };
  public autoGroupColumnDef = {
    headerName: 'Group',
    minWidth: 300,
    suppressMenu: true
  };
  public groupDefaultExpanded = -1;
  public getDataPath = function (data: TaskItemModel) {
    const fullPath = [];
    fullPath.push(data.englishLevel);
    fullPath.push(data.grammarPart);
    fullPath.push(data.taskType);
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
  }

  getContextMenuItems = (params) => {
    return [];
  }
}
