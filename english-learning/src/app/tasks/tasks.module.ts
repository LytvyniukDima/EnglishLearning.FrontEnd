import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksListCardComponent } from './tasks-list-card/tasks-list-card.component';
import { TaskComponent } from './task/task.component';
import { TaskBracketsComponent } from './task-brackets/task-brackets.component';
import { TaskBracketsItemComponent } from './task-brackets-item/task-brackets-item.component';

@NgModule({
  declarations: [TasksListComponent, TasksListCardComponent, TaskComponent, TaskBracketsComponent, TaskBracketsItemComponent],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
