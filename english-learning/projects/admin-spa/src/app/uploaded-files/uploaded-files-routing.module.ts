import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnalyzeFormComponent } from "./components/analyze-form/analyze-form.component";
import { UploadFileComponent } from "./components/upload-file/upload-file.component";
import { UploadedFilesComponent } from "./components/uploaded-files/uploaded-files.component";

const routes: Routes = [
    { path: '', component: UploadedFilesComponent },
    { path: 'upload-file/:id', component: UploadFileComponent },
    { path: 'analyse-form/:id', component: AnalyzeFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UploadedFilesRoutingModule { }
