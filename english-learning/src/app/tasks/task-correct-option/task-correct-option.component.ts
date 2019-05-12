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

  models: EnglishTaskCorrectOptionModel[] = [];
  usersAnswers: number[];
  answers: number[];
  resultModel = new EnglishTaskResult();

  constructor(
    private authService: AuthService, 
    private statisticService: TasksStatisticService,
    private taskMapper: TasksMapperService) { }

  ngOnInit() {
    this.usersAnswers = new Array(this.models.length);
    this.answers = new Array(this.models.length);
    this.parseAnswer();
    this.parseTask();
  }

  parseTask() {
    let splitedText = this.task.text.split('\n');
    for (let i = 0; i < splitedText.length; i++) {
      let englishTaskCorrectOptionModel = new EnglishTaskCorrectOptionModel();
      let splitedByContentOption = splitedText[i].split('|');
      let content = splitedByContentOption[0];
      let options = splitedByContentOption[1];

      englishTaskCorrectOptionModel.items = content.split('<br>');
      englishTaskCorrectOptionModel.options = options.split('/');

      englishTaskCorrectOptionModel.answer = this.answers[i];
      this.models.push(englishTaskCorrectOptionModel);
    }

    console.log(this.models);
  }

  parseAnswer() {
    let splitedAnswers = this.task.answer.split('\n');

    for (let answer of splitedAnswers) {
      this.answers.push(parseInt(answer));
    }
  }

  onChangedAnswers(answer: number, index: number) {
    this.usersAnswers[index] = answer;
  }

  onFinish() {
    this.resultModel.correct = 0;
    this.resultModel.incorrect = 0;

    console.log(this.answers);
    console.log(this.usersAnswers);
    for (let i = 0; i < this.answers.length; i++) {
      if (this.answers[i] === this.usersAnswers[i]) {
        this.resultModel.correct++;
      } else {
        this.resultModel.incorrect++;
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
