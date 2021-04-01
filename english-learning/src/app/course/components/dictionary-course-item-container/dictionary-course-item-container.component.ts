import { Component, Input, OnInit } from '@angular/core';
import { CourseItemModel } from '../../models/course-item.model';
import { DictionaryCourseItemModel } from '../../models/dictionary-course-item.model';

@Component({
  selector: 'app-dictionary-course-item-container',
  templateUrl: './dictionary-course-item-container.component.html',
  styleUrls: ['./dictionary-course-item-container.component.css']
})
export class DictionaryCourseItemContainerComponent implements OnInit {
  @Input() courseItem: DictionaryCourseItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
