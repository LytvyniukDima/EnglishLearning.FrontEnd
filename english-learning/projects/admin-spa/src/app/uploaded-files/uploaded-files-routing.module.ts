import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UploadedFilesComponent } from "./components/uploaded-files/uploaded-files.component";

const routes: Routes = [
    { path: '', component: UploadedFilesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UploadedFilesRoutingModule { }
