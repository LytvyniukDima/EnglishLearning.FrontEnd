import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordDetailsComponent } from './components/word-details/word-details.component';



@NgModule({
  declarations: [WordDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WordDetailsComponent
  ]
})
export class DictionaryCoreModule { }
