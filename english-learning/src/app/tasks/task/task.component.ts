import { Component, OnInit } from '@angular/core';
import { EnglishTaskModel } from '../models/EnglishTaskModel';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../services/tasks.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public task = new EnglishTaskModel;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.getTask(id);

    console.log(this.task);
  }

  getTask(id: string) {
    this.tasksService.getFullTaskById(id).subscribe(data => {
      console.log(data);
      this.task = data;
      console.log(this.task);
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
