import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AudioTaskModel } from '../models/audio-task.model';
import { CompletedEnglishTaskCreationModel } from '../models/CompletedEnglishTaskCreationModel';
import { EnglishTaskResult } from '../models/EnglishTaskResult';

@Component({
  selector: 'app-task-audio',
  templateUrl: './task-audio.component.html',
  styleUrls: ['./task-audio.component.css']
})
export class TaskAudioComponent implements OnInit {
  @Input() task: AudioTaskModel;

  @Output() completedTask = new EventEmitter<CompletedEnglishTaskCreationModel>();

  userResults: boolean[];
  resultModel = new EnglishTaskResult();

  constructor() { }

  ngOnInit(): void {
    this.userResults = new Array(this.task.sents.length);
  }

  onItemChanged(isCorrect: boolean, index: number): void {
    this.userResults[index] = isCorrect;
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
        const message = `${i + 1}. correct answer - ${this.task.sents[i].sent}`;

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
    const completedTask = new CompletedEnglishTaskCreationModel();
    completedTask.contentId = null;
    completedTask.englishLevel = this.task.englishLevel;
    completedTask.date = new Date(Date.now());
    completedTask.grammarPart = this.task.grammarPart;
    completedTask.correctAnswers = this.resultModel.correct;
    completedTask.incorrectAnswers = this.resultModel.incorrect;

    this.completedTask.emit(completedTask);
  }
}
