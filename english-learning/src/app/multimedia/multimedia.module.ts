import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultimediaRoutingModule } from './multimedia-routing.module';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    MultimediaRoutingModule
  ]
})
export class MultimediaModule { }
