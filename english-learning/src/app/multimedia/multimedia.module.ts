import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultimediaRoutingModule } from './multimedia-routing.module';
import { VideoComponent } from './video/video.component';
import { TextComponent } from './text/text.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoListCardComponent } from './video-list-card/video-list-card.component';
import { TextListComponent } from './text-list/text-list.component';
import { TextListCardComponent } from './text-list-card/text-list-card.component';

@NgModule({
  declarations: [
    VideoComponent,
    TextComponent,
    VideoListComponent,
    VideoListCardComponent,
    TextListComponent,
    TextListCardComponent
  ],
  imports: [
    CommonModule,
    MultimediaRoutingModule
  ]
})
export class MultimediaModule { }
