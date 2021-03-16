import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskItemModel } from '../../models/task-item.model';
import { TaskItemsParametersModel } from '../../models/task-items-parameters.model';
import { TasksItemsApiService } from '../../services/tasks-items-api.service';

@Component({
  selector: 'admin-task-items-list',
  templateUrl: './task-items-list.component.html',
  styleUrls: ['./task-items-list.component.scss']
})
export class TaskItemsListComponent implements OnInit {
  public filterOptions$: Observable<TaskItemsParametersModel>;
  public taskItems$: Observable<TaskItemModel>;

  public grammarPartsSet = new Set<string>();
  public sentTypesSet = new Set<string>();
  public taskTypesSet = new Set<string>();
  public englishLevelSet = new Set<string>();

  constructor(private itemsApiService: TasksItemsApiService) { 
    this.filterOptions$ = this.itemsApiService.getFilterOptions();
    this.taskItems$ = this.itemsApiService.getTaskItems(this.getSearchParameters());
  }

  ngOnInit(): void {
  }

  onChangedGrammarPartBox(event) {
    let target = event.target;
    let value = target.value;

    if (target.checked) {
      this.grammarPartsSet.add(value);
    } else {
      this.grammarPartsSet.delete(value);
    }
  }

  onChagedSentTypeBox(event) {
    let target = event.target;
    let value = target.value;

    if (target.checked) {
      this.sentTypesSet.add(value);
    } else {
      this.sentTypesSet.delete(value);
    }
  }

  onChagedTaskTypeBox(event) {
    let target = event.target;
    let value = target.value;

    if (target.checked) {
      this.taskTypesSet.add(value);
    } else {
      this.taskTypesSet.delete(value);
    }
  }

  onChangedEnglishLevelBox(event) {
    let target = event.target;
    let value = target.value;

    if (target.checked) {
      this.englishLevelSet.add(value);
    } else {
      this.englishLevelSet.delete(value);
    }
  }

  onSearch() {
    const parameters = this.getSearchParameters();

    this.taskItems$ = this.itemsApiService.getTaskItems(parameters);
  }

  private getSearchParameters(): TaskItemsParametersModel {
    const parameters: TaskItemsParametersModel = {
      grammarPart: Array.from(this.grammarPartsSet),
      sentType: Array.from(this.sentTypesSet),
      taskType: Array.from(this.taskTypesSet),
      englishLevel: Array.from(this.englishLevelSet),
    };

    return parameters;
  }
}
