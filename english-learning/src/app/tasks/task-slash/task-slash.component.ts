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
  usersAnswers: number[][];
  answers: number[][];
  resultModel = new EnglishTaskResult();

  constructor(
    private authService: AuthService, 
    private statisticService: TasksStatisticService,
    private taskMapper: TasksMapperService
  ) { }

  ngOnInit() {
    this.usersAnswers = new Array(this.task.count);
    this.answers = new Array(this.task.count);
    this.models = this.parseTask(this.task);
  }

  parseTask(task: EnglishTaskModel): EnglishTaskSlashModel[] {
    const jObject = JSON.parse(task.content);

    return jObject as EnglishTaskSlashModel[];
  }

  onChangedAnswers(answer: number[], index: number) {
    this.usersAnswers[index] = answer;
  }

  onFinish() {
    this.resultModel.correct = 0;
    this.resultModel.incorrect = 0;

    console.log(this.answers);
    for (let i = 0; i < this.answers.length; i++) {
      for (let j = 0; j < this.answers[i].length; j++) {
        if (this.answers[i][j] === this.usersAnswers[i][j]) {
          this.resultModel.correct++;
        } else {
          this.resultModel.incorrect++;
        }
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
