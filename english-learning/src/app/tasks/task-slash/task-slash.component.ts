import { Component, OnInit, Input } from '@angular/core';
import { EnglishTaskModel } from '../models/EnglishTaskModel';
import { EnglishTaskSlashModel } from '../models/EnglishTaskSlashModel';
import { EnglishTaskResult } from '../models/EnglishTaskResult';
import { TasksMapperService } from '../services/tasks-mapper.service';
import { TasksStatisticService } from '../services/tasks-statistic.service';
import { AuthService } from 'src/app/authorization/serives/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CompletedEnglishTaskCreationModel } from '../models/CompletedEnglishTaskCreationModel';

@Component({
  selector: 'app-task-slash',
  templateUrl: './task-slash.component.html',
  styleUrls: ['./task-slash.component.css']
})
export class TaskSlashComponent implements OnInit {
  @Input() task: EnglishTaskModel;
  
  models: EnglishTaskSlashModel[] = [];
  userResults: boolean[];
  resultModel = new EnglishTaskResult();

  constructor(
    private authService: AuthService, 
    private statisticService: TasksStatisticService,
    private taskMapper: TasksMapperService
  ) { }

  ngOnInit() {
    this.models = this.parseTask(this.task);
    this.userResults = new Array(this.models.length);
  }

  parseTask(task: EnglishTaskModel): EnglishTaskSlashModel[] {
    const jObject = JSON.parse(task.content);

    return jObject as EnglishTaskSlashModel[];
  }

  onChangedAnswers(result: boolean, index: number) {
    this.userResults[index] = result;
  }

  onFinish() {
    this.resultModel = new EnglishTaskResult();
    this.resultModel.correct = 0;
    this.resultModel.incorrect = 0;

    for (let i = 0; i < this.userResults.length; i++) {
      if (this.userResults[i]) {
        this.resultModel.correct++;
      } else {
        this.resultModel.incorrect++;

        const message = `{i + 1}. correct answer - ${this.models[i].answers.join(',')}`;
        this.resultModel.additionalMessages.push(message);
      }
    }

    if (this.resultModel.incorrect === 0 && this.resultModel.correct > 0) {
      this.resultModel.headerMessage = "Congratulations!";
    } else {
      this.resultModel.headerMessage = "Good Try!"
    }
  }

  onCompleted() {
    console.log('completed')
    if (!this.authService.isAuthentificated)
      return;

    let completedTask = new CompletedEnglishTaskCreationModel();
    completedTask.contentId = this.task.id;
    completedTask.englishLevel = this.task.englishLevel;
    completedTask.date = new Date(Date.now());
    completedTask.grammarPart = this.taskMapper.parseGrammarPart(this.task.grammarPart);
    completedTask.correctAnswers = this.resultModel.correct;
    completedTask.incorrectAnswers = this.resultModel.incorrect;

    this.statisticService.createCompletedEnglishTask(completedTask).subscribe(data => {

    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      })
  }
}
