import { Component, Input, OnInit } from "@angular/core";
import { TaskModel } from "../../models/task.model";
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

@Component({
    selector: 'admin-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
	private gridApi;
  private gridColumnApi;

  @Input() tasks: TaskModel[];

	public columnDefs = [
    {
      field: 'grammarPart',
      suppressMenu: true,
    },
		{
      field: 'taskType',
      suppressMenu: true,
    },
		{
      field: 'englishLevel',
      suppressMenu: true,
    },
		{
      field: 'count',
      suppressMenu: true,
    },
  ];
  public defaultColDef = { flex: 1 };

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