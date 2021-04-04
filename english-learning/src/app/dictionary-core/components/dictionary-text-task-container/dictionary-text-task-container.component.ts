import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EnglishTaskResult } from 'src/app/tasks-core/models/EnglishTaskResult';
import { CompletedDictionaryTaskModel } from '../../models/completed-dictionary-task.model';
import { DictionaryTaskModel } from '../../models/dictionary-task.model';

@Component({
  selector: 'app-dictionary-text-task-container',
  templateUrl: './dictionary-text-task-container.component.html',
  styleUrls: ['./dictionary-text-task-container.component.css']
})
export class DictionaryTextTaskContainerComponent implements OnInit {
  @Input() task: DictionaryTaskModel;

  @Output() completedTask = new EventEmitter<CompletedDictionaryTaskModel>();

  userResults: boolean[];
  resultModel = new EnglishTaskResult();

  constructor() { }

  ngOnInit(): void {
    this.userResults = new Array(this.task.words.length);
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
        const message = `${i + 1}. correct answer - ${this.task.words[i]}`;

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
    const learnedWords = [];
    for (let i = 0; i < this.userResults.length; i++) {
      if (this.userResults[i]) {
        learnedWords.push(this.task.words[i]);
      }
    }

    const completedTask: CompletedDictionaryTaskModel = {
      topic: this.task.wordTopic,
      learnedWords: learnedWords,
      allWords: this.task.words,
      taskType: this.task.taskType
    };

    this.completedTask.emit(completedTask);
  }
}
