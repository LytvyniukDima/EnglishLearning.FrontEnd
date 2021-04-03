import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EnglishTaskModel } from 'src/app/tasks-core/models/EnglishTaskModel';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.css']
})
export class TaskContainerComponent implements OnInit {
  public task$: Observable<EnglishTaskModel>;
  
  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.task$ = this.tasksService.getFullTaskById(id);
  }
}
