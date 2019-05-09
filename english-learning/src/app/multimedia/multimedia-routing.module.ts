import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { TextComponent } from './text/text.component';
import { VideoListComponent } from './video-list/video-list.component';

const routes: Routes = [
  { path: 'multimedia/video_list', component: VideoListComponent },
  { path: 'multimedia/text', component: TextComponent },
  { path: 'multimedia/video/:id', component: VideoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultimediaRoutingModule { }
