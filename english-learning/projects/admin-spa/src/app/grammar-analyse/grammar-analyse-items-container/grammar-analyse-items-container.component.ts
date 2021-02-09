import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ParsedSentModel } from '../models/parsed-sent.model';
import { GrammarAnalyseApiService } from '../service/grammar-analyse-api.service';

@Component({
  selector: 'admin-grammar-analyse-items-container',
  templateUrl: './grammar-analyse-items-container.component.html',
  styleUrls: ['./grammar-analyse-items-container.component.scss']
})
export class GrammarAnalyseItemsContainerComponent implements OnInit {
  private analyseId: string;

  parsedSents$: Observable<ParsedSentModel[]>;

  constructor(
    private route: ActivatedRoute,
    private apiService: GrammarAnalyseApiService) { }

  ngOnInit(): void {
    this.analyseId = this.route.snapshot.paramMap.get('id');

    this.parsedSents$ = this.apiService.getParsedSents(this.analyseId);
  }

}
