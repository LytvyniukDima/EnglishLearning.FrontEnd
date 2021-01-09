import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadedFilesComponent } from './components/uploaded-files/uploaded-files.component';
import { UploadedFilesRoutingModule } from './uploaded-files-routing.module';

@NgModule({
  declarations: [UploadedFilesComponent],
  imports: [
    CommonModule,
    UploadedFilesRoutingModule
  ]
})
export class UploadedFilesModule { }
