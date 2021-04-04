import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseApiService } from '../../services/course-api.service';

@Component({
  selector: 'app-topic-list-container',
  templateUrl: './topic-list-container.component.html',
  styleUrls: ['./topic-list-container.component.css']
})
export class TopicListContainerComponent implements OnInit {
  topic: string;

  words$: Observable<string[]>;

  constructor(
    private route: ActivatedRoute,
    private apiService: CourseApiService) {
    this.topic = this.route.snapshot.paramMap.get('topic');
  }

  ngOnInit(): void {
    this.words$ = this.apiService.getTopicWords(this.topic);
  }
}
