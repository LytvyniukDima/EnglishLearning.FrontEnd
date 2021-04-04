import { Component, Input, OnInit } from '@angular/core';
import { ParsedSentTaskModel } from '../models/parsed-sent-task.model';

@Component({
  selector: 'app-task-audio-item',
  templateUrl: './task-audio-item.component.html',
  styleUrls: ['./task-audio-item.component.css']
})
export class TaskAudioItemComponent implements OnInit {
  @Input() sent: ParsedSentTaskModel;

  constructor() { }

  ngOnInit(): void {
  }

}
