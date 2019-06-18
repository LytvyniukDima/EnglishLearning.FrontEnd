import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticRoutingModule } from './statistic-routing.module';
import { CompletedStatisticComponent } from './completed-statistic/completed-statistic.component';
import { CompletedStatisticItemComponent } from './completed-statistic-item/completed-statistic-item.component';
import { CompletedStatisticService } from './services/completed-statistic.service';
import { MultimediaLevelStatisticComponent } from './multimedia-level-statistic/multimedia-level-statistic.component';
import { TasksLevelStatisticComponent } from './tasks-level-statistic/tasks-level-statistic.component';
import { TasksCorrectnessStatisticComponent } from './tasks-correctness-statistic/tasks-correctness-statistic.component';
import { LastMonthStatisticComponent } from './last-month-statistic/last-month-statistic.component';

@NgModule({
  declarations: [
    CompletedStatisticComponent, 
    CompletedStatisticItemComponent,
    MultimediaLevelStatisticComponent, 
    TasksLevelStatisticComponent, 
    TasksCorrectnessStatisticComponent, 
    LastMonthStatisticComponent
  ],
  imports: [
    CommonModule,
    StatisticRoutingModule
  ],
  providers: [
    CompletedStatisticService
  ]
})
export class StatisticModule { }
