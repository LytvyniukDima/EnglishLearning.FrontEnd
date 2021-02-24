import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskItemsParametersModel } from '../../models/task-items-parameters.model';
import { TasksItemsApiService } from '../../services/tasks-items-api.service';

@Component({
  selector: 'admin-task-items-list',
  templateUrl: './task-items-list.component.html',
  styleUrls: ['./task-items-list.component.scss']
})
export class TaskItemsListComponent implements OnInit {
  public filterOptions$: Observable<TaskItemsParametersModel>;

  public grammarPartsSet = new Set();
  public sentTypesSet = new Set();
  public taskTypesSet = new Set();

  constructor(private itemsApiService: TasksItemsApiService) { 
    this.filterOptions$ = this.itemsApiService.getFilterOptions();
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

  onSearch() {
    console.log(this.taskTypesSet);
    console.log(this.sentTypesSet);
    console.log(this.grammarPartsSet);
  } 
}
