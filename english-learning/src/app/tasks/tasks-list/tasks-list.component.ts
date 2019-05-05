import { Component, OnInit } from '@angular/core';
import { EnglishTaskInfoModel } from '../models/EnglishTaskInfoModel';
import { TasksService } from '../services/tasks.service';
import { TasksMapperService } from '../services/tasks-mapper.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  // public taskInfoList: EnglishTaskInfoModel[] = [
  //   { id: "sdffd", englishLevel: "Elementary", grammarPart: "present simple", taskType: "checkbox"},
  //   { id: "sdffd", englishLevel: "PreIntermediate", grammarPart: "present simple", taskType: "checkbox"},
  //   { id: "sdffd", englishLevel: "UpperIntermediate", grammarPart: "present simple", taskType: "checkbox"},
  //   { id: "sdffd", englishLevel: "Advanced", grammarPart: "present simple", taskType: "checkbox"},
  //   { id: "sdffd", englishLevel: "Intermediate", grammarPart: "present simple", taskType: "checkbox"},
  //   { id: "sdffd", englishLevel: "Elementary", grammarPart: "present simple", taskType: "checkbox"},
  //   { id: "sdffd", englishLevel: "PreIntermediate", grammarPart: "present simple", taskType: "checkbox"},
  //   { id: "sdffd", englishLevel: "UpperIntermediate", grammarPart: "present simple", taskType: "checkbox"},
  //   { id: "sdffd", englishLevel: "Advanced", grammarPart: "present simple", taskType: "checkbox"},
  //   { id: "sdffd", englishLevel: "Elementary", grammarPart: "present simple", taskType: "checkbox"},
  //   { id: "sdffd", englishLevel: "PreIntermediate", grammarPart: "present simple", taskType: "checkbox"},
  //   { id: "sdffd", englishLevel: "UpperIntermediate", grammarPart: "present simple", taskType: "checkbox"},
  //   { id: "sdffd", englishLevel: "Advanced", grammarPart: "present simple", taskType: "checkbox"},
  //   { id: "sdffd", englishLevel: "Intermediate", grammarPart: "present simple", taskType: "checkbox"}
  // ]

  public taskInfoList: EnglishTaskInfoModel[];

  constructor(private tasksService: TasksService, private tasksMapper: TasksMapperService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasksService.getRandomTasksInfoList().subscribe(data => {
      console.log(data);
      this.taskInfoList = data;
      this.tasksMapper.fixNamingsForInfoModels(this.taskInfoList);
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      })
  }
}
