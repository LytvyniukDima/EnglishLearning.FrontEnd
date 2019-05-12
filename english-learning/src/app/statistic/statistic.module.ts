import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticRoutingModule } from './statistic-routing.module';
import { CompletedStatisticComponent } from './completed-statistic/completed-statistic.component';
import { CompletedStatisticItemComponent } from './completed-statistic-item/completed-statistic-item.component';
import { CompletedStatisticService } from './services/completed-statistic.service';

@NgModule({
  declarations: [
    CompletedStatisticComponent, 
    CompletedStatisticItemComponent
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
