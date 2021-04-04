import { Component, Input, OnInit } from '@angular/core';
import { DictionaryTaskModel } from '../../models/dictionary-task.model';

@Component({
  selector: 'app-dictionary-task',
  templateUrl: './dictionary-task.component.html',
  styleUrls: ['./dictionary-task.component.css']
})
export class DictionaryTaskComponent implements OnInit {
  @Input() task: DictionaryTaskModel;
  
  constructor() { }

  ngOnInit(): void {
  }

}
