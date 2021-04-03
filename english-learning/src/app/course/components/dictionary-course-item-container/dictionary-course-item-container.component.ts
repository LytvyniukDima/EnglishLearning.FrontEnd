import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DictionaryCourseItemModel } from '../../models/dictionary-course-item.model';

@Component({
  selector: 'app-dictionary-course-item-container',
  templateUrl: './dictionary-course-item-container.component.html',
  styleUrls: ['./dictionary-course-item-container.component.css']
})
export class DictionaryCourseItemContainerComponent implements OnInit {
  @Input() courseItem: DictionaryCourseItemModel;
  @Output() trainTopic = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getAccordionId(): string {
    const id = this.getId();
    return `accordion-${id}`;
  }

  getTargetAccordionId(): string {
    return `#${this.getAccordionId()}`;
  }

  getId(): string {
    //const id = this.courseItem.topic.replaceAll(' ', '');
    const id = this.courseItem.topic.split(' ').join('');
    return `item-${id}`;
  }

  getTargetId(): string {
    const id = this.getId();
    return `#${id}`;
  }

  getPercentage(): number {
    const percentage = (this.courseItem.learnedWords / this.courseItem.wordsToLearn) * 100;
    return Math.floor(percentage);
  }

  getProgressBarStyle(): any {
    const percentage = this.getPercentage();
    return {
      width: `${percentage}%`
    };
  }

  getProgressBarClass(): any {
    const progressClass = 100 > this.getPercentage()
      ? "bg-warning"
      : "bg-success";

    const obj = {};
    obj[progressClass] = true;
    return obj;
  };

  onTrainTopic(): void {
    this.trainTopic.emit(this.courseItem.topic);
  }
}
