import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CompletedDictionaryTaskModel } from '../../models/completed-dictionary-task.model';
import { DictionaryTaskModel } from '../../models/dictionary-task.model';

@Component({
  selector: 'app-dictionary-task',
  templateUrl: './dictionary-task.component.html',
  styleUrls: ['./dictionary-task.component.css']
})
export class DictionaryTaskComponent implements OnInit {
  @Input() task: DictionaryTaskModel;
  
  @Output() completedTask = new EventEmitter<CompletedDictionaryTaskModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onCompletedAudioTask(completed: CompletedDictionaryTaskModel) {
    this.completedTask.emit(completed);
  }

  onCompletedTextTask(completed: CompletedDictionaryTaskModel) {
    this.completedTask.emit(completed);
  }
}
