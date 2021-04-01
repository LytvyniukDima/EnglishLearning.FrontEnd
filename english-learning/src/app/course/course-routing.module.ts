import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CourseListContainerComponent } from "./components/course-list-container/course-list-container.component";
import { ProtoCourseComponent } from "./components/proto-course/proto-course.component";

const routes: Routes = [
    { path: 'course/proto', component: ProtoCourseComponent },
    { path: 'course/list', component: CourseListContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
