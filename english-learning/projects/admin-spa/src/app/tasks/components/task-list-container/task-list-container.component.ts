import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskFilterOptionsModel } from '../../models/task-filter-options.model';
import { TaskFilterModel } from '../../models/task-filter.model';
import { TaskModel } from '../../models/task.model';
import { CreateTaskApiService } from '../../services/create-task-api.service';

@Component({
  selector: 'admin-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.scss']
})
export class TaskListContainerComponent implements OnInit {
  public filterOptions$: Observable<TaskFilterOptionsModel>;
  public tasks$: Observable<TaskModel[]>;

  public grammarPartsSet = new Set<string>();
  public englishLevelsSet = new Set<string>();
  public taskTypesSet = new Set<string>();

  constructor(
    private taskService: CreateTaskApiService) { 
    this.filterOptions$ = this.taskService.getFilterOptions();
    this.tasks$ = this.taskService.getTasks(this.getSearchParameters());
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

  onChagedEnglishLevelBox(event) {
    let target = event.target;
    let value = target.value;

    if (target.checked) {
      this.englishLevelsSet.add(value);
    } else {
      this.englishLevelsSet.delete(value);
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

  onSearch() {
    const parameters = this.getSearchParameters();
    console.log(parameters);
    this.tasks$ = this.taskService.getTasks(parameters);
  }

  getGrammarParts(filterOptions: TaskFilterOptionsModel): string[] {
    return Object.keys(filterOptions.grammarPartFilterOptions);
  }

  getEnglishLevels(filterOptions: TaskFilterOptionsModel): string[] {
    return Object.keys(filterOptions.englishLevelFilterOptions);
  }

  getTaskTypes(filterOptions: TaskFilterOptionsModel): string[] {
    return Object.keys(filterOptions.taskTypeFilterOptions);
  }

  private getSearchParameters(): TaskFilterModel {
    const parameters: TaskFilterModel = {
      grammarPart: Array.from(this.grammarPartsSet),
      englishLevel: Array.from(this.englishLevelsSet),
      taskType: Array.from(this.taskTypesSet),
    };

    return parameters;
  }
}
