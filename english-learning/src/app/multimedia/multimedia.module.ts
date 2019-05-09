import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultimediaRoutingModule } from './multimedia-routing.module';
import { VideoComponent } from './video/video.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    VideoComponent,
    TextComponent
  ],
  imports: [
    CommonModule,
    MultimediaRoutingModule
  ]
})
export class MultimediaModule { }
