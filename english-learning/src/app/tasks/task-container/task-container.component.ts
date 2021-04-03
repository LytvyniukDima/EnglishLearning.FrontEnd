import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CompletedEnglishTaskCreationModel } from 'src/app/tasks-core/models/CompletedEnglishTaskCreationModel';
import { EnglishTaskModel } from 'src/app/tasks-core/models/EnglishTaskModel';
import { TasksStatisticService } from '../services/tasks-statistic.service';
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
    private statisticService: TasksStatisticService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.task$ = this.tasksService.getFullTaskById(id);
  }

  onCompletedTask(completedTask: CompletedEnglishTaskCreationModel): void {
    this.statisticService.createCompletedEnglishTask(completedTask).subscribe(data => {
      this.router.navigate(['/tasks/list']);
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
