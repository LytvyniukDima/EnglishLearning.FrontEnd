import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompletedDictionaryTaskModel } from 'src/app/dictionary-core/models/completed-dictionary-task.model';
import { DictionaryTaskModel } from 'src/app/dictionary-core/models/dictionary-task.model';
import { AddLearnedWordsCommandModel } from '../../models/add-learned-words-command.model';
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
    private apiService: CourseApiService,
    private router: Router) { }

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

  onCompletedTask(completed: CompletedDictionaryTaskModel): void {
    const learnedWordsModel: AddLearnedWordsCommandModel = {
      topic: completed.topic,
      words: completed.learnedWords,
      taskType: completed.taskType
    };

    this.apiService.completeWords(learnedWordsModel).subscribe(_ => {
      return this.router.navigate(['/course/list']);
    })
  }
}
