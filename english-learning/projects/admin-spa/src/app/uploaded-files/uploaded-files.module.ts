import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadedFilesComponent } from './components/uploaded-files/uploaded-files.component';
import { UploadedFilesRoutingModule } from './uploaded-files-routing.module';
import { UploadedFilesListComponent } from './components/uploaded-files-list/uploaded-files-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnalyzeFormComponent } from './components/analyze-form/analyze-form.component';

@NgModule({
  declarations: [UploadedFilesComponent, UploadedFilesListComponent, UploadFileComponent, AnalyzeFormComponent],
  imports: [
    CommonModule,
    UploadedFilesRoutingModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
  ]
})
export class UploadedFilesModule { }
