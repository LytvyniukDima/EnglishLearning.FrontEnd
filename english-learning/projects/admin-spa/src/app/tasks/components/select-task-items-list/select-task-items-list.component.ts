import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { TaskItemModel } from "../../models/task-item.model";

@Component({
  selector: "admin-select-task-items-list",
  templateUrl: "./select-task-items-list.component.html",
  styleUrls: ["./select-task-items-list.component.scss"],
})
export class SelectTaskItemsListComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  @Input() taskItems: TaskItemModel[];

  @Output() selectedItemsChanged = new EventEmitter<string[]>();

  public columnDefs = [
    {
      field: "content",
      suppressMenu: true,
      width: 600,
    },
  ];
  public defaultColDef = { flex: 1 };
  public autoGroupColumnDef = {
    headerName: "Group",
    suppressMenu: true,
    cellRendererParams: {
      checkbox: true,
      suppressCount: true,
    },
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
  public getRowNodeId = function (data: TaskItemModel) {
    return data.id;
  };

  constructor() {}

  ngOnInit(): void {}

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridColumnApi.sizeColumnsToFit(1200);
  }

  getContextMenuItems = (params) => {
    return [];
  };

  onSelectionChanged() {
    const node = this.gridApi.getSelectedNodes()[0];

    const selectedNodes = this.getSelectedNodes(
      this.gridApi.getSelectedNodes()
    );

    this.selectedItemsChanged.emit(selectedNodes);
  }

  private getSelectedNodes(nodes): string[] {
    const selected = [];

    nodes.forEach((node) => {
      if (node !== undefined) {
        if (node.data === undefined) {
          node.setSelected(false);
        } else {
          selected.push(node.data.id);
        }
      }
    });

    return selected;
  }
}
