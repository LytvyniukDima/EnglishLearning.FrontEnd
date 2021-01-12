import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UploadFileComponent } from "./components/upload-file/upload-file.component";
import { UploadedFilesComponent } from "./components/uploaded-files/uploaded-files.component";

const routes: Routes = [
    { path: '', component: UploadedFilesComponent },
    { path: 'upload-file/:id', component: UploadFileComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UploadedFilesRoutingModule { }
