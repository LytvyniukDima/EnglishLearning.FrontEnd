import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-list-container',
  templateUrl: './topic-list-container.component.html',
  styleUrls: ['./topic-list-container.component.css']
})
export class TopicListContainerComponent implements OnInit {
  topic: string;

  constructor(private route: ActivatedRoute) {
    this.topic = this.route.snapshot.paramMap.get('topic');
  }

  ngOnInit(): void {
  }

}
