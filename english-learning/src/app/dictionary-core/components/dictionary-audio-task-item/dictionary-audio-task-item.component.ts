import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DictionaryAudioService } from '../../service/dictionary-audio.service';

@Component({
  selector: 'app-dictionary-audio-task-item',
  templateUrl: './dictionary-audio-task-item.component.html',
  styleUrls: ['./dictionary-audio-task-item.component.css']
})
export class DictionaryAudioTaskItemComponent implements OnInit {
  @Input() word: string;

  @Output() isCorrect = new EventEmitter<boolean>();

  isIncorrectAnswer = false;
  
  constructor(private audioService: DictionaryAudioService) { }

  ngOnInit(): void {
  }

  get audioUrl(): string {
    return this.audioService.getAudioUrl(this.word);
  }

  onInputChange(event): void {
    const answer = event.target.value;
    if (answer !== this.word) {
      this.isIncorrectAnswer = true;
    } else {
      this.isIncorrectAnswer = false;
    }

    this.isCorrect.emit(!this.isIncorrectAnswer);
  }
}
