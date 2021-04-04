import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ParsedSentTaskModel } from '../models/parsed-sent-task.model';
import { TasksAudioService } from '../services/tasks-audio.service';

@Component({
  selector: 'app-task-audio-item',
  templateUrl: './task-audio-item.component.html',
  styleUrls: ['./task-audio-item.component.css']
})
export class TaskAudioItemComponent implements OnInit {
  @Input() sent: ParsedSentTaskModel;

  @Output() isCorrect = new EventEmitter<boolean>();

  isIncorrectAnswer = false;

  constructor(private audioService: TasksAudioService) { }

  ngOnInit(): void {
  }

  get audioUrl(): string {
    return this.audioService.getAudioUrl(this.sent.id);
  }

  onInputChange(event): void {
    const answer = event.target.value;
    if (answer !== this.sent.sent) {
      this.isIncorrectAnswer = true;
    } else {
      this.isIncorrectAnswer = false;
    }

    this.isCorrect.emit(!this.isIncorrectAnswer);
  }
}
