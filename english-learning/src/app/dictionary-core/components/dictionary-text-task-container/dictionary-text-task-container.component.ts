import { Component, Input, OnInit } from '@angular/core';
import { DictionaryTaskModel } from '../../models/dictionary-task.model';

@Component({
  selector: 'app-dictionary-text-task-container',
  templateUrl: './dictionary-text-task-container.component.html',
  styleUrls: ['./dictionary-text-task-container.component.css']
})
export class DictionaryTextTaskContainerComponent implements OnInit {
  @Input() task: DictionaryTaskModel;

  constructor() { }

  ngOnInit(): void {
  }

}
