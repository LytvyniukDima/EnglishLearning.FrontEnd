import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordContainerComponent } from './components/word-container/word-container.component';

const routes: Routes = [
  { path: 'dictionary/word/:word', component: WordContainerComponent },
  { path: 'dictionary/word', component: WordContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DictionaryRoutingModule { }