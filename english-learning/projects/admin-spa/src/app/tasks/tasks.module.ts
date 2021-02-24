import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemsListComponent } from './components/task-items-list/task-items-list.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskItemsTreeComponent } from './components/task-items-tree/task-items-tree.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [TaskItemsListComponent, TaskItemsTreeComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class TasksModule { }
