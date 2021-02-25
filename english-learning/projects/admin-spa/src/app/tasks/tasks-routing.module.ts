import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateTaskFormComponent } from "./components/create-task-form/create-task-form.component";
import { TaskItemsListComponent } from "./components/task-items-list/task-items-list.component";

const routes: Routes = [
    { path: 'items', component: TaskItemsListComponent },
    { path: 'create', component: CreateTaskFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksRoutingModule {

}