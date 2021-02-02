import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrammarAnalysisListComponent } from './grammar-analysis-list/grammar-analysis-list.component';
import { GrammaranalyseRoutingModule } from './grammar-analyse-routing.module';



@NgModule({
  declarations: [GrammarAnalysisListComponent],
  imports: [
    CommonModule,
    GrammaranalyseRoutingModule
  ]
})
export class GrammaranalyseModule { }
