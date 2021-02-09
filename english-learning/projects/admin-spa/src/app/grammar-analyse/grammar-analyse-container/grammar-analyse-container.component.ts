import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GrammarFileAnalysedModel } from '../models/grammar-file-analyzed.model';
import { GrammarAnalyseApiService } from '../service/grammar-analyse-api.service';

@Component({
  selector: 'admin-grammar-analyse-container',
  templateUrl: './grammar-analyse-container.component.html',
  styleUrls: ['./grammar-analyse-container.component.scss']
})
export class GrammarAnalyseContainerComponent implements OnInit {
  public analysisList$: Observable<GrammarFileAnalysedModel[]>;

  constructor(private analysisService: GrammarAnalyseApiService) { }

  ngOnInit(): void {
    this.analysisList$ = this.analysisService.getAllGrammarAnalysis();
  }

}
