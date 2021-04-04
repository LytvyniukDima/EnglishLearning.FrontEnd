import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordContainerComponent } from './components/word-container/word-container.component';
import { DictionaryRoutingModule } from './dictionary-routing.module';
import { WordDetailsContainerComponent } from './components/word-details-container/word-details-container.component';
import { WordListComponent } from './components/word-list/word-list.component';
import { UserWordListComponent } from './components/user-word-list/user-word-list.component';
import { UserWordListContainerComponent } from './components/user-word-list-container/user-word-list-container.component';
import { DictionaryCoreModule } from '../dictionary-core/dictionary-core.module';



@NgModule({
  declarations: [WordContainerComponent, WordDetailsContainerComponent, WordListComponent, UserWordListComponent, UserWordListContainerComponent],
  imports: [
    CommonModule,
    DictionaryRoutingModule,
    DictionaryCoreModule
  ]
})
export class DictionaryModule { }
