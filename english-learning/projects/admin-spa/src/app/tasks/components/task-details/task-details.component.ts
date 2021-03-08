import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import {
  ICellRendererParams,
  IAfterGuiAttachedParams,
} from "ag-grid-community";

@Component({
  selector: "admin-task-details",
  templateUrl: "./task-details.component.html",
  styleUrls: ["./task-details.component.scss"],
})
export class TaskDetailsComponent implements ICellRendererAngularComp {
  taskContent = "";

  constructor() {}

  agInit(params: ICellRendererParams): void {
    const object = JSON.parse(params.data.content);
    this.taskContent = JSON.stringify(object, null, 2)
      .replace(/ /g, '&nbsp;') // note the usage of `/ /g` instead of `' '` in order to replace all occurences
      .replace(/\n/g, '<br/>');
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
