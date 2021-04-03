import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-train-container',
  templateUrl: './task-train-container.component.html',
  styleUrls: ['./task-train-container.component.css']
})
export class TaskTrainContainerComponent implements OnInit {
  grammarPart: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.grammarPart = this.route.snapshot.paramMap.get('grammarPart');
  }

}
