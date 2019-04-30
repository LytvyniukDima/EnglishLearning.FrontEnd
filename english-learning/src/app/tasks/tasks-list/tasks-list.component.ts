import { Component, OnInit } from '@angular/core';
import { EnglishTaskInfoModel } from '../models/EnglishTaskInfoModel';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  public taskInfoList: EnglishTaskInfoModel[] = [
    { id: "sdffd", englishLevel: "Elementary", grammarPart: "present simple", taskType: "checkbox"},
    { id: "sdffd", englishLevel: "PreIntermediate", grammarPart: "present simple", taskType: "checkbox"},
    { id: "sdffd", englishLevel: "UpperIntermediate", grammarPart: "present simple", taskType: "checkbox"},
    { id: "sdffd", englishLevel: "Advanced", grammarPart: "present simple", taskType: "checkbox"},
    { id: "sdffd", englishLevel: "Intermediate", grammarPart: "present simple", taskType: "checkbox"},
    { id: "sdffd", englishLevel: "Elementary", grammarPart: "present simple", taskType: "checkbox"},
    { id: "sdffd", englishLevel: "PreIntermediate", grammarPart: "present simple", taskType: "checkbox"},
    { id: "sdffd", englishLevel: "UpperIntermediate", grammarPart: "present simple", taskType: "checkbox"},
    { id: "sdffd", englishLevel: "Advanced", grammarPart: "present simple", taskType: "checkbox"},
    { id: "sdffd", englishLevel: "Elementary", grammarPart: "present simple", taskType: "checkbox"},
    { id: "sdffd", englishLevel: "PreIntermediate", grammarPart: "present simple", taskType: "checkbox"},
    { id: "sdffd", englishLevel: "UpperIntermediate", grammarPart: "present simple", taskType: "checkbox"},
    { id: "sdffd", englishLevel: "Advanced", grammarPart: "present simple", taskType: "checkbox"},
    { id: "sdffd", englishLevel: "Intermediate", grammarPart: "present simple", taskType: "checkbox"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
