import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksListCardComponent } from './tasks-list-card/tasks-list-card.component';
import { TasksService } from './services/tasks.service';
import { TaskContainerComponent } from './task-container/task-container.component';
import { TasksCoreModule } from '../tasks-core/tasks-core.module';

@NgModule({
  declarations: [
    TasksListComponent, 
    TasksListCardComponent, 
    TaskContainerComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    TasksCoreModule
  ],
  providers: [
    TasksService
  ]
})
export class TasksModule { }
