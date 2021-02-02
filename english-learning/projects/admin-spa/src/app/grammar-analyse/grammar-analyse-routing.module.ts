import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GrammarAnalysisListComponent } from "./grammar-analysis-list/grammar-analysis-list.component";

const routes: Routes = [
    { path: 'list', component: GrammarAnalysisListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GrammaranalyseRoutingModule { }
