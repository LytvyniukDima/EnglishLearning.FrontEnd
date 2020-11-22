import { Component, OnInit } from '@angular/core';
import { EnglishTaskModel } from '../models/EnglishTaskModel';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../services/tasks.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public task$: Observable<EnglishTaskModel>;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.task$ = this.tasksService.getFullTaskById(id);
  }
}
