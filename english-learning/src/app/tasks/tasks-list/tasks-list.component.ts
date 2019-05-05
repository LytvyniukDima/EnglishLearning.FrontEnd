import { Component, OnInit } from '@angular/core';
import { EnglishTaskInfoModel } from '../models/EnglishTaskInfoModel';
import { TasksService } from '../services/tasks.service';
import { TasksMapperService } from '../services/tasks-mapper.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  public taskInfoList: EnglishTaskInfoModel[];
  public englishLevels: string[];
  public grammarParts: string[];
  public englishLevelsMap = new Map();
  public grammarPartsMap = new Map();

  constructor(private tasksService: TasksService, private tasksMapper: TasksMapperService) { }

  ngOnInit() {
    this.getTasks();
    this.englishLevels = this.tasksMapper.getAllEnglishLevels();
    this.grammarParts = this.tasksMapper.getAllGrammaprParts();

    this.grammarParts.forEach((value, indes) => { this.grammarPartsMap.set(value, false)});
    this.englishLevels.forEach((value, index) => { this.englishLevelsMap.set(value, false)});
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

  onSearch() {
    let englishLevelsToSearch = [];
    let grammarPartsToSearch = [];

    this.englishLevelsMap.forEach((value, key) => {
      if (value)
        englishLevelsToSearch.push(key);
    })

    this.grammarPartsMap.forEach((value, key) => {
      if (value)
        grammarPartsToSearch.push(key);
    })

    grammarPartsToSearch = this.tasksMapper.mapToApiGrammarParts(grammarPartsToSearch);

  }

  onChagedEnglishLevelBox(event) {
    let target = event.target;
    let value = target.value;

    if (target.checked) {
      this.englishLevelsMap.set(value, true);
    } else {
      this.englishLevelsMap.set(value, false);
    }

    console.log(event);
  }

  onChangedGrammarPartBox(event) {
    let target = event.target;
    let value = target.value;

    if (target.checked) {
      this.grammarPartsMap.set(value, true);
    } else {
      this.grammarPartsMap.set(value, false);
    }
    
    console.log(event);
  }
}
