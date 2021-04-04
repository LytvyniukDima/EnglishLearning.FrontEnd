import { Component, Input, OnInit } from '@angular/core';
import { AudioTaskModel } from '../models/audio-task.model';

@Component({
  selector: 'app-task-audio',
  templateUrl: './task-audio.component.html',
  styleUrls: ['./task-audio.component.css']
})
export class TaskAudioComponent implements OnInit {
  @Input() task: AudioTaskModel;

  constructor() { }

  ngOnInit(): void {
  }

}
