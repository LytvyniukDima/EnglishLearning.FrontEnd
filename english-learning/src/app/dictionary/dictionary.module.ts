import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordContainerComponent } from './components/word-container/word-container.component';
import { DictionaryRoutingModule } from './dictionary-routing.module';
import { WordDetailsContainerComponent } from './components/word-details-container/word-details-container.component';



@NgModule({
  declarations: [WordContainerComponent, WordDetailsContainerComponent],
  imports: [
    CommonModule,
    DictionaryRoutingModule
  ]
})
export class DictionaryModule { }
