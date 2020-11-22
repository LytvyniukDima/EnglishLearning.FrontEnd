import { Component, OnInit, Input } from '@angular/core';
import { EnglishTaskModel } from '../models/EnglishTaskModel';
import { EnglishTaskCorrectOptionModel } from '../models/EnglishTaskCorrectOptionModel';
import { EnglishTaskResult } from '../models/EnglishTaskResult';
import { AuthService } from 'src/app/authorization/serives/auth.service';
import { TasksStatisticService } from '../services/tasks-statistic.service';
import { TasksMapperService } from '../services/tasks-mapper.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CompletedEnglishTaskCreationModel } from '../models/CompletedEnglishTaskCreationModel';

@Component({
  selector: 'app-task-correct-option',
  templateUrl: './task-correct-option.component.html',
  styleUrls: ['./task-correct-option.component.css']
})
export class TaskCorrectOptionComponent implements OnInit {
  @Input() task: EnglishTaskModel;

  models: EnglishTaskCorrectOptionModel[];
  userResults: boolean[];
  resultModel = new EnglishTaskResult();

  constructor(
    private authService: AuthService, 
    private statisticService: TasksStatisticService,
    private taskMapper: TasksMapperService) { }

  ngOnInit() {
    this.models = this.parseTask(this.task.content);
    this.userResults = new Array(this.models.length);
  }

  parseTask(content: string): EnglishTaskCorrectOptionModel[] {
    const jObject = JSON.parse(content);

    return jObject as EnglishTaskCorrectOptionModel[];
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
        const answer = this.models[i].options[this.models[i].answer - 1];

        const message = `${i + 1}. correct answer - ${answer}`;
        this.resultModel.additionalMessages.push(message);
      }
    }

    if(this.resultModel.incorrect === 0 && this.resultModel.correct > 0) {
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
