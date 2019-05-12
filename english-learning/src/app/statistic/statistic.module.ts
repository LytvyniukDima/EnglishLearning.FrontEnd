import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticRoutingModule } from './statistic-routing.module';
import { CompletedStatisticComponent } from './completed-statistic/completed-statistic.component';

@NgModule({
  declarations: [CompletedStatisticComponent],
  imports: [
    CommonModule,
    StatisticRoutingModule
  ]
})
export class StatisticModule { }
