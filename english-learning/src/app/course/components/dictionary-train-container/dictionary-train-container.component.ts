import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DictionaryTaskModel } from 'src/app/dictionary-core/models/dictionary-task.model';
import { CourseApiService } from '../../services/course-api.service';

@Component({
  selector: 'app-dictionary-train-container',
  templateUrl: './dictionary-train-container.component.html',
  styleUrls: ['./dictionary-train-container.component.css']
})
export class DictionaryTrainContainerComponent implements OnInit {
  topic: string;

  task$: Observable<DictionaryTaskModel>;

  constructor(
    private route: ActivatedRoute,
    private apiService: CourseApiService) { }

  ngOnInit(): void {
    this.topic = this.route.snapshot.paramMap.get('topic');
    this.task$ = this.apiService.getDictionaryTrainModel(this.topic)
      .pipe(
        map(x => {
          const model: DictionaryTaskModel = {
            englishLevel: x.englishLevel,
            wordTopic: x.wordTopic,
            words: x.words,
            taskType: x.taskType,
          };
          return model;
        })
      );
  }
}
