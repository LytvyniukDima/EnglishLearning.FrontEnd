import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { ProtoCourseComponent } from './components/proto-course/proto-course.component';
import { CourseListContainerComponent } from './components/course-list-container/course-list-container.component';
import { TaskCourseItemContainerComponent } from './components/task-course-item-container/task-course-item-container.component';
import { DictionaryCourseItemContainerComponent } from './components/dictionary-course-item-container/dictionary-course-item-container.component';
import { TaskTrainContainerComponent } from './components/task-train-container/task-train-container.component';
import { DictionaryTrainContainerComponent } from './components/dictionary-train-container/dictionary-train-container.component';



@NgModule({
  declarations: [ProtoCourseComponent, CourseListContainerComponent, TaskCourseItemContainerComponent, DictionaryCourseItemContainerComponent, TaskTrainContainerComponent, DictionaryTrainContainerComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
  ]
})
export class CourseModule { }
