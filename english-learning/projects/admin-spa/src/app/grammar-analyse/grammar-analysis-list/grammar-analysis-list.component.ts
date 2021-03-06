import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GrammarFileAnalysedModel } from '../models/grammar-file-analyzed.model';
import 'ag-grid-enterprise';

@Component({
  selector: 'admin-grammar-analysis-list',
  templateUrl: './grammar-analysis-list.component.html',
  styleUrls: ['./grammar-analysis-list.component.scss']
})
export class GrammarAnalysisListComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  @Input() analysisList: GrammarFileAnalysedModel[];

  @Output() openAnalyse = new EventEmitter<string>();
  @Output() generateTasks = new EventEmitter<string>();

  public columnDefs = [
    { 
      field: 'fileId',
      suppressMenu: true
    },
    { 
      field: 'sentCount',
      suppressMenu: true,
      headerName: 'Number of Sentences'
    },
  ];
  public defaultColDef = { flex: 1 };
  public autoGroupColumnDef = {
    headerName: 'Name',
    minWidth: 300,
    cellRendererParams: { 
      suppressCount: true,
    },
    suppressMenu: true
  };
  public groupDefaultExpanded = -1;
  public getDataPath = function (data: GrammarFileAnalysedModel) {
    const fullPath = data.path;
    fullPath.push(data.name);
    return fullPath;
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
    const analyseItem: GrammarFileAnalysedModel = params.node?.data;
    const contextItems = [];

    if (analyseItem !== undefined) {
      contextItems.push({
        name: 'Open Analyse',
        action: () => this.onOpenAnalyze(analyseItem),
        cssClasses: [],
        icon: '<span class="material-icons">open_in_new</span>'
      });
      contextItems.push('separator');
      contextItems.push({
        name: 'Generate Tasks',
        action: () => this.onGenerateTasks(analyseItem),
        cssClasses: [],
        icon: '<span class="material-icons">task</span>'
      })
    }


    return contextItems;
  }

  public onOpenAnalyze(item: GrammarFileAnalysedModel) {
    this.openAnalyse.emit(item.id);
  }

  public onGenerateTasks(item: GrammarFileAnalysedModel) {
    this.generateTasks.emit(item.id);
  }
}