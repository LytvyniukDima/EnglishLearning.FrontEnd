import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordDetailsComponent } from './components/word-details/word-details.component';
import { WordListComponent } from './components/word-list/word-list.component';
import { DictionaryTaskComponent } from './components/dictionary-task/dictionary-task.component';
import { DictionaryAudioTaskContainerComponent } from './components/dictionary-audio-task-container/dictionary-audio-task-container.component';
import { DictionaryTextTaskContainerComponent } from './components/dictionary-text-task-container/dictionary-text-task-container.component';
import { DictionaryAudioTaskItemComponent } from './components/dictionary-audio-task-item/dictionary-audio-task-item.component';

@NgModule({
  declarations: [
    WordDetailsComponent,
    WordListComponent,
    DictionaryTaskComponent,
    DictionaryAudioTaskContainerComponent,
    DictionaryTextTaskContainerComponent,
    DictionaryAudioTaskItemComponent
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
