import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemsListComponent } from './components/task-items-list/task-items-list.component';
import { TaskItemsListContainerComponent } from './components/task-items-list-container/task-items-list-container.component';
import { TasksRoutingModule } from './tasks-routing.module';



@NgModule({
  declarations: [TaskItemsListComponent, TaskItemsListContainerComponent],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
