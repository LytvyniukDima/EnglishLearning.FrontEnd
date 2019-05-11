import { Component, OnInit } from '@angular/core';
import { EnglishTextModel } from '../models/EnglishTextModel';
import { MultimediaService } from '../services/multimedia.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  public textModel = new EnglishTextModel;
  public text: string[];

  constructor(
    private multimediaService: MultimediaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    
    this.getText(id);
  }

  getText = async (id) => {
    await this.multimediaService
      .getFullTextById(id)
      .toPromise()
      .then(data => {
        this.textModel = data;

        this.text = this.textModel.text.split('\n');
      })
  }
}
