import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordContainerComponent } from './components/word-container/word-container.component';
import { DictionaryRoutingModule } from './dictionary-routing.module';



@NgModule({
  declarations: [WordContainerComponent],
  imports: [
    CommonModule,
    DictionaryRoutingModule
  ]
})
export class DictionaryModule { }
