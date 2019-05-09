import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { TextComponent } from './text/text.component';

const routes: Routes = [
  { path: 'multimedia/video', component: VideoComponent },
  { path: 'multimedia/text', component: TextComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultimediaRoutingModule { }
