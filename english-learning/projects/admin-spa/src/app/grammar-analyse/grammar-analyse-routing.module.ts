import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GrammarAnalyseContainerComponent } from "./grammar-analyse-container/grammar-analyse-container.component";

const routes: Routes = [
    { path: 'list', component: GrammarAnalyseContainerComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GrammaranalyseRoutingModule { }
