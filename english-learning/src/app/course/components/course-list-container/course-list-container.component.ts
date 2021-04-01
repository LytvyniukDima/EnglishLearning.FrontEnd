import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseItemModel } from '../../models/course-item.model';
import { DictionaryCourseItemModel } from '../../models/dictionary-course-item.model';
import { TaskCourseItemModel } from '../../models/task-course-item.model';
import { CourseApiService } from '../../services/course-api.service';

@Component({
  selector: 'app-course-list-container',
  templateUrl: './course-list-container.component.html',
  styleUrls: ['./course-list-container.component.css']
})
export class CourseListContainerComponent implements OnInit {
  courseItems$: Observable<CourseItemModel[]>;

  constructor(private apiService: CourseApiService) { }

  ngOnInit(): void {
    this.courseItems$ = this.apiService.getItems();
  }

  getDictionaryItem(item: CourseItemModel): DictionaryCourseItemModel {
    return item as DictionaryCourseItemModel;
  }

  getTaskItem(item: CourseItemModel): TaskCourseItemModel {
    return item as TaskCourseItemModel;
  }
}
