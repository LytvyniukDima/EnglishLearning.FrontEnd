import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskItemsListComponent } from "./components/task-items-list/task-items-list.component";

const routes: Routes = [
    { path: 'items', component: TaskItemsListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksRoutingModule {

}