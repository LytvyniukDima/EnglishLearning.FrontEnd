import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordDetailsComponent } from './components/word-details/word-details.component';
import { WordListComponent } from './components/word-list/word-list.component';
import { DictionaryTaskComponent } from './components/dictionary-task/dictionary-task.component';

@NgModule({
  declarations: [
    WordDetailsComponent,
    WordListComponent,
    DictionaryTaskComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WordDetailsComponent,
    WordListComponent,
    DictionaryTaskComponent
  ]
})
export class DictionaryCoreModule { }
