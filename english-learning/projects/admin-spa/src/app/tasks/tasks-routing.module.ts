import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskItemsListContainerComponent } from "./components/task-items-list-container/task-items-list-container.component";

const routes: Routes = [
    { path: 'items', component: TaskItemsListContainerComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksRoutingModule {

}