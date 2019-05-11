import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { TextComponent } from './text/text.component';
import { VideoListComponent } from './video-list/video-list.component';
import { TextListComponent } from './text-list/text-list.component';

const routes: Routes = [
  { path: 'multimedia/video_list', component: VideoListComponent },
  { path: 'multimedia/video/:id', component: VideoComponent},
  { path: 'multimedia/text_list', component: TextListComponent},
  { path: 'multimedia/text/:id', component: TextComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultimediaRoutingModule { }
