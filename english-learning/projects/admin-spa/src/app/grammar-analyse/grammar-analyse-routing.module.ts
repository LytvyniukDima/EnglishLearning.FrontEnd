import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GrammarAnalyseContainerComponent } from "./grammar-analyse-container/grammar-analyse-container.component";
import { GrammarAnalyseItemsContainerComponent } from "./grammar-analyse-items-container/grammar-analyse-items-container.component";
import { TaskItemsGenerationFormComponent } from "./task-items-generation-form/task-items-generation-form.component";

const routes: Routes = [
    { path: 'list', component: GrammarAnalyseContainerComponent },
    { path: 'analyse/:id', component: GrammarAnalyseItemsContainerComponent },
    { path: 'generate/task-items/:id', component: TaskItemsGenerationFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GrammaranalyseRoutingModule { }
