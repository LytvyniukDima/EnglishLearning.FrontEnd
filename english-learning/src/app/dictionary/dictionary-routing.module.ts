import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserWordListContainerComponent } from './components/user-word-list-container/user-word-list-container.component';
import { UserWordListComponent } from './components/user-word-list/user-word-list.component';
import { WordContainerComponent } from './components/word-container/word-container.component';

const routes: Routes = [
  { path: 'dictionary/word', component: WordContainerComponent },
  { path: 'dictionary/list', component: UserWordListContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DictionaryRoutingModule { }