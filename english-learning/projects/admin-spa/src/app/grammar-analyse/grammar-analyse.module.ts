import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrammarAnalysisListComponent } from './grammar-analysis-list/grammar-analysis-list.component';
import { GrammaranalyseRoutingModule } from './grammar-analyse-routing.module';
import { GrammarAnalyseContainerComponent } from './grammar-analyse-container/grammar-analyse-container.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [GrammarAnalysisListComponent, GrammarAnalyseContainerComponent],
  imports: [
    CommonModule,
    GrammaranalyseRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class GrammaranalyseModule { }
