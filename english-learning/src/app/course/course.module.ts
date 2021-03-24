import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { ProtoCourseComponent } from './components/proto-course/proto-course.component';



@NgModule({
  declarations: [ProtoCourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
  ]
})
export class CourseModule { }
