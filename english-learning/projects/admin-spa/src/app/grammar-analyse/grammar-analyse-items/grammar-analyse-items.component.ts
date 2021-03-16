import { Component, Input, OnInit } from '@angular/core';
import { ParsedSentModel } from '../models/parsed-sent.model';
import 'ag-grid-enterprise';

@Component({
  selector: 'admin-grammar-analyse-items',
  templateUrl: './grammar-analyse-items.component.html',
  styleUrls: ['./grammar-analyse-items.component.scss']
})
export class GrammarAnalyseItemsComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  @Input() parsedSents: ParsedSentModel[];

  public columnDefs = [
    { 
      field: 'englishLevel',
      suppressMenu: true,
      rowGroup: true,
      hide: true
    },
    { 
      field: 'sentType',
      suppressMenu: true,
      rowGroup: true,
      hide: true
    },
    { 
      field: 'sent',
      suppressMenu: true,
      headerName: 'Sentence'
    },
  ];
  public autoGroupColumnDef = {
    headerName: 'Type of Sentence',
    minWidth: 120,
    suppressMenu: true
  };
  public defaultColDef = { flex: 1 };

  constructor() { }

  ngOnInit(): void {
  }

  onGridReady(params) {
    console.log(this.parsedSents);
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  getContextMenuItems = (params) => {
    const contextItems = [];

    return contextItems;
  }
}
