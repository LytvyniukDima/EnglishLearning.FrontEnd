import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GrammarAnalyseContainerComponent } from "./grammar-analyse-container/grammar-analyse-container.component";
import { GrammarAnalyseItemsContainerComponent } from "./grammar-analyse-items-container/grammar-analyse-items-container.component";

const routes: Routes = [
    { path: 'list', component: GrammarAnalyseContainerComponent },
    { path: 'analyse/:id', component: GrammarAnalyseItemsContainerComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GrammaranalyseRoutingModule { }
