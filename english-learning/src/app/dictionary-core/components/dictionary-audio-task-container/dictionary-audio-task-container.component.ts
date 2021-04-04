import { Component, Input, OnInit } from '@angular/core';
import { DictionaryTaskModel } from '../../models/dictionary-task.model';

@Component({
  selector: 'app-dictionary-audio-task-container',
  templateUrl: './dictionary-audio-task-container.component.html',
  styleUrls: ['./dictionary-audio-task-container.component.css']
})
export class DictionaryAudioTaskContainerComponent implements OnInit {
  @Input() task: DictionaryTaskModel;

  constructor() { }

  ngOnInit(): void {
  }

}
