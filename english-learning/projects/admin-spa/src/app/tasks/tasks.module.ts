import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemsListComponent } from './components/task-items-list/task-items-list.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskItemsTreeComponent } from './components/task-items-tree/task-items-tree.component';
import { AgGridModule } from 'ag-grid-angular';
import { CreateTaskFormComponent } from './components/create-task-form/create-task-form.component';



@NgModule({
  declarations: [TaskItemsListComponent, TaskItemsTreeComponent, CreateTaskFormComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class TasksModule { }
