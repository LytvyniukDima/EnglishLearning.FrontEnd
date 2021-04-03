import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EnglishTaskModel } from '../models/EnglishTaskModel';
import { EnglishTaskSlashModel } from '../models/EnglishTaskSlashModel';
import { EnglishTaskResult } from '../models/EnglishTaskResult';
import { TasksMapperService } from '../services/tasks-mapper.service';
import { AuthService } from 'src/app/authorization/serives/auth.service';
import { CompletedEnglishTaskCreationModel } from '../models/CompletedEnglishTaskCreationModel';

@Component({
  selector: 'app-task-slash',
  templateUrl: './task-slash.component.html',
  styleUrls: ['./task-slash.component.css']
})
export class TaskSlashComponent implements OnInit {
  @Input() task: EnglishTaskModel;
  
  @Output() completedTask = new EventEmitter<CompletedEnglishTaskCreationModel>();

  models: EnglishTaskSlashModel[] = [];
  userResults: boolean[];
  resultModel = new EnglishTaskResult();

  constructor(
    private authService: AuthService,
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

        const message = `${i + 1}. Incorrect answer`;
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
    completedTask.grammarPart = this.task.grammarPart;
    completedTask.correctAnswers = this.resultModel.correct;
    completedTask.incorrectAnswers = this.resultModel.incorrect;

    this.completedTask.emit(completedTask);
  }
}
