import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseItemModel } from '../../models/course-item.model';
import { DictionaryCourseItemModel } from '../../models/dictionary-course-item.model';
import { TaskCourseItemModel } from '../../models/task-course-item.model';
import { TaskTrainModel } from '../../models/task-train.model';
import { CourseApiService } from '../../services/course-api.service';

@Component({
  selector: 'app-course-list-container',
  templateUrl: './course-list-container.component.html',
  styleUrls: ['./course-list-container.component.css']
})
export class CourseListContainerComponent implements OnInit {
  courseItems$: Observable<CourseItemModel[]>;

  constructor(
    private apiService: CourseApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.courseItems$ = this.apiService.getItems();
  }

  getDictionaryItem(item: CourseItemModel): DictionaryCourseItemModel {
    return item as DictionaryCourseItemModel;
  }

  getTaskItem(item: CourseItemModel): TaskCourseItemModel {
    return item as TaskCourseItemModel;
  }

  onTaskTrain(grammarPart: string): void {
    this.router.navigate([`/course/train/task/${grammarPart}`]);
  }

  onTopicTrain(topic: string): void {
    this.router.navigate([`/course/train/dictionary/${topic}`]);
  }

  onWordList(topic: string): void {
    this.router.navigate([`/course/dictionary/list/${topic}`]);
  }
}
