import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CourseListContainerComponent } from "./components/course-list-container/course-list-container.component";
import { DictionaryTrainContainerComponent } from "./components/dictionary-train-container/dictionary-train-container.component";
import { ProtoCourseComponent } from "./components/proto-course/proto-course.component";
import { TaskTrainContainerComponent } from "./components/task-train-container/task-train-container.component";

const routes: Routes = [
    { path: 'course/proto', component: ProtoCourseComponent },
    { path: 'course/list', component: CourseListContainerComponent },
    { path: 'course/train/task/:grammarPart', component: TaskTrainContainerComponent },
    { path: 'course/train/dictionary/:topic', component: DictionaryTrainContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
