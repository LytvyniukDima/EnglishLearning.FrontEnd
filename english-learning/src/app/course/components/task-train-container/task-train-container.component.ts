import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { AudioTaskModel } from 'src/app/tasks-core/models/audio-task.model';
import { CompletedEnglishTaskCreationModel } from 'src/app/tasks-core/models/CompletedEnglishTaskCreationModel';
import { EnglishTaskModel } from 'src/app/tasks-core/models/EnglishTaskModel';
import { TasksStatisticService } from 'src/app/tasks/services/tasks-statistic.service';
import { CompleteTaskCommandModel } from '../../models/complete-task-command.model';
import { TaskTrainModel } from '../../models/task-train.model';
import { CourseApiService } from '../../services/course-api.service';
import { TaskTrainApiService } from '../../services/task-train-api.service';

@Component({
  selector: 'app-task-train-container',
  templateUrl: './task-train-container.component.html',
  styleUrls: ['./task-train-container.component.css']
})
export class TaskTrainContainerComponent implements OnInit {
  grammarPart: string;

  trainModel: TaskTrainModel;

  audioTask$: Observable<AudioTaskModel>;
  randomTask$: Observable<EnglishTaskModel>;

  constructor(
    private route: ActivatedRoute,
    private apiService: CourseApiService,
    private taskApiService: TaskTrainApiService,
    private router: Router,
    private statisticService: TasksStatisticService) { }

  ngOnInit(): void {
    this.grammarPart = this.route.snapshot.paramMap.get('grammarPart');
    this.apiService.getTaskTrainModel(this.grammarPart).subscribe(model => {
      this.trainModel = model;

      if (this.trainModel.taskType === 'Audio') {
        this.audioTask$ = this.taskApiService.getAudioTask(model);
      } else {
        this.randomTask$ = this.taskApiService.getRandomTask(model);
      }
    });
  }

  onCompletedRandomTask(completed: CompletedEnglishTaskCreationModel): void {
    const taskCompleteModel: CompleteTaskCommandModel = {
      grammarPart: completed.grammarPart,
      itemsCount: completed.correctAnswers + completed.incorrectAnswers,
      correctAnswers: completed.correctAnswers,
      taskType: this.trainModel.taskType
    };

    const completeTask$ = this.apiService.completeTask(taskCompleteModel);
    const statistic$ = this.statisticService.createCompletedEnglishTask(completed);
    forkJoin([completeTask$, statistic$]).subscribe(_ => {
      this.router.navigate(['/course/list'])
    });
  }

  onCompletedAudioTask(completed: CompletedEnglishTaskCreationModel): void {
    const taskCompleteModel: CompleteTaskCommandModel = {
      grammarPart: completed.grammarPart,
      itemsCount: completed.correctAnswers + completed.incorrectAnswers,
      correctAnswers: completed.correctAnswers,
      taskType: this.trainModel.taskType
    };

    const completeTask$ = this.apiService.completeTask(taskCompleteModel);
    const statistic$ = this.statisticService.createCompletedEnglishTask(completed);
    forkJoin([completeTask$, statistic$]).subscribe(_ => {
      this.router.navigate(['/course/list'])
    });
  }
}
