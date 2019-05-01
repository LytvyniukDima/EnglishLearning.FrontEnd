import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksListCardComponent } from './tasks-list-card/tasks-list-card.component';
import { TaskComponent } from './task/task.component';
import { TaskBracketsComponent } from './task-brackets/task-brackets.component';
import { TaskBracketsItemComponent } from './task-brackets-item/task-brackets-item.component';
import { TaskSlashComponent } from './task-slash/task-slash.component';
import { TaskSlashItemComponent } from './task-slash-item/task-slash-item.component';
import { TaskCorrectOptionComponent } from './task-correct-option/task-correct-option.component';
import { TaskCorrectOptionItemComponent } from './task-correct-option-item/task-correct-option-item.component';

@NgModule({
  declarations: [
    TasksListComponent, 
    TasksListCardComponent, 
    TaskComponent, 
    TaskBracketsComponent, 
    TaskBracketsItemComponent, 
    TaskSlashComponent, 
    TaskSlashItemComponent, 
    TaskCorrectOptionComponent, 
    TaskCorrectOptionItemComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }