import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { ProtoCourseComponent } from './components/proto-course/proto-course.component';
import { CourseListContainerComponent } from './components/course-list-container/course-list-container.component';



@NgModule({
  declarations: [ProtoCourseComponent, CourseListContainerComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
  ]
})
export class CourseModule { }
