import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadedFilesComponent } from './components/uploaded-files/uploaded-files.component';
import { UploadedFilesRoutingModule } from './uploaded-files-routing.module';
import { UploadedFilesListComponent } from './components/uploaded-files-list/uploaded-files-list.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [UploadedFilesComponent, UploadedFilesListComponent],
  imports: [
    CommonModule,
    UploadedFilesRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class UploadedFilesModule { }
