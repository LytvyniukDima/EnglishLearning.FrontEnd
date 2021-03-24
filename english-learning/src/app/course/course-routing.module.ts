import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProtoCourseComponent } from "./components/proto-course/proto-course.component";

const routes: Routes = [
    { path: 'course/proto', component: ProtoCourseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
