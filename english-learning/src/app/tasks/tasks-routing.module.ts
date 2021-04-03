import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskContainerComponent } from './task-container/task-container.component';

const routes: Routes = [
  { path: 'tasks/list', component: TasksListComponent },
  { path: 'tasks/task/:id', component: TaskContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
