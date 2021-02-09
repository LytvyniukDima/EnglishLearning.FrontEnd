import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrammarAnalysisListComponent } from './grammar-analysis-list/grammar-analysis-list.component';
import { GrammaranalyseRoutingModule } from './grammar-analyse-routing.module';
import { GrammarAnalyseContainerComponent } from './grammar-analyse-container/grammar-analyse-container.component';
import { AgGridModule } from 'ag-grid-angular';
import { GrammarAnalyseItemsContainerComponent } from './grammar-analyse-items-container/grammar-analyse-items-container.component';
import { GrammarAnalyseItemsComponent } from './grammar-analyse-items/grammar-analyse-items.component';



@NgModule({
  declarations: [GrammarAnalysisListComponent, GrammarAnalyseContainerComponent, GrammarAnalyseItemsContainerComponent, GrammarAnalyseItemsComponent],
  imports: [
    CommonModule,
    GrammaranalyseRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class GrammaranalyseModule { }
