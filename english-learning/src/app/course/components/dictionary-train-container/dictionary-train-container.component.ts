import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dictionary-train-container',
  templateUrl: './dictionary-train-container.component.html',
  styleUrls: ['./dictionary-train-container.component.css']
})
export class DictionaryTrainContainerComponent implements OnInit {
  topic: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.topic = this.route.snapshot.paramMap.get('topic');
    console.log(this.topic);
  }

}
