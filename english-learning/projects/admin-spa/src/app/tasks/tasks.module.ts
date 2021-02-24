import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemsListComponent } from './components/task-items-list/task-items-list.component';
import { TasksRoutingModule } from './tasks-routing.module';



@NgModule({
  declarations: [TaskItemsListComponent],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
