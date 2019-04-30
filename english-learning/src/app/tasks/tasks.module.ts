import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksListCardComponent } from './tasks-list-card/tasks-list-card.component';

@NgModule({
  declarations: [TasksListComponent, TasksListCardComponent],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
