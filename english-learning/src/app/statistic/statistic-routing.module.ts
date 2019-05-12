import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletedStatisticComponent } from './completed-statistic/completed-statistic.component';

const routes: Routes = [
  { path: 'statistic/completed', component: CompletedStatisticComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticRoutingModule { }
