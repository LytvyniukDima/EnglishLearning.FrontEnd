import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemsListComponent } from './components/task-items-list/task-items-list.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskItemsTreeComponent } from './components/task-items-tree/task-items-tree.component';
import { AgGridModule } from 'ag-grid-angular';
import { CreateTaskFormComponent } from './components/create-task-form/create-task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectTaskItemsContainerComponent } from './components/select-task-items-container/select-task-items-container.component';
import { SelectTaskItemsListComponent } from './components/select-task-items-list/select-task-items-list.component';
import { TaskListContainerComponent } from './components/task-list-container/task-list-container.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';



@NgModule({
  declarations: [
    TaskItemsListComponent,
    TaskItemsTreeComponent,
    CreateTaskFormComponent,
    SelectTaskItemsContainerComponent,
    SelectTaskItemsListComponent,
    TaskListContainerComponent,
    TaskListComponent,
    TaskDetailsComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    AgGridModule.withComponents([TaskDetailsComponent]),
    ReactiveFormsModule,
  ]
})
export class TasksModule { }
