import { Component, OnInit, Input } from '@angular/core';
import { EnglishTaskModel } from '../models/EnglishTaskModel';
import { EnglishTaskResult } from '../models/EnglishTaskResult';
import { EnglishTaskBracketsItem } from '../models/EnglishTaskBracketsItem';
import { AuthService } from 'src/app/authorization/serives/auth.service';
import { TasksStatisticService } from '../services/tasks-statistic.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CompletedEnglishTaskCreationModel } from '../models/CompletedEnglishTaskCreationModel';
import { TasksMapperService } from '../services/tasks-mapper.service';
import { EnglishTaskBracketsModel } from '../models/EnglishTaskBracketsModel';

@Component({
  selector: 'app-task-brackets',
  templateUrl: './task-brackets.component.html',
  styleUrls: ['./task-brackets.component.css']
})
export class TaskBracketsComponent implements OnInit {
  @Input() task: EnglishTaskModel;

  models: EnglishTaskBracketsModel[];
  userResults: boolean[];
  resultModel = new EnglishTaskResult();;

  constructor(
    private authService: AuthService, 
    private statisticService: TasksStatisticService,
    private taskMapper: TasksMapperService) { }

  ngOnInit() {
    this.userResults = new Array(this.task.count);
    this.models = this.parseTask(this.task.content);
  }

  parseTask(content: string): EnglishTaskBracketsModel[] {
    const jObject = JSON.parse(content);

    return jObject as EnglishTaskBracketsModel[];
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

        for (let j = 0; j < this.models[i].lines.length; j++) {
          if (this.models[i].lines[j].answer === undefined || this.models[i].lines[j].answer.length === 0) {
            continue;
          }
          
          const message = `${i + 1}. correct answer - ${this.models[i].lines[j].answer[0]}`;
          this.resultModel.additionalMessages.push(message);
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
    completedTask.grammarPart = this.task.grammarPart;
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
