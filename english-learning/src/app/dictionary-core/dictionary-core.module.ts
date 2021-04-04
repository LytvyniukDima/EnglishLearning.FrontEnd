import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordDetailsComponent } from './components/word-details/word-details.component';
import { WordListComponent } from './components/word-list/word-list.component';

@NgModule({
  declarations: [
    WordDetailsComponent,
    WordListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WordDetailsComponent,
    WordListComponent
  ]
})
export class DictionaryCoreModule { }
