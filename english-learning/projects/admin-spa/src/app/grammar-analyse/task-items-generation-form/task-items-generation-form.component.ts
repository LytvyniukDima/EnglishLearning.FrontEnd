import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StaticTaskValuesService } from '../../common/tasks/static-task-values.service';
import { GrammarFileAnalysedModel } from '../models/grammar-file-analyzed.model';
import { TaskGenerationModel } from '../models/task-generation.model';
import { GrammarAnalyseApiService } from '../service/grammar-analyse-api.service';
import { TaskGenerationApiService } from '../service/task-generation-api.service';

@Component({
  selector: 'admin-task-items-generation-form',
  templateUrl: './task-items-generation-form.component.html',
  styleUrls: ['./task-items-generation-form.component.scss']
})
export class TaskItemsGenerationFormComponent implements OnInit {
  isSendingRequest = false;

  private analyseId: string;
  grammarAnalyse$: Observable<GrammarFileAnalysedModel>;

  public taskItemsForm: FormGroup;

  public grammarParts: string[];
  public taskTypeMap: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private grammarAnalyseApiService: GrammarAnalyseApiService,
    private fb: FormBuilder,
    private staticValuesService: StaticTaskValuesService,
    private taskGenerationService: TaskGenerationApiService,
  ) { 
    this.taskItemsForm = fb.group(
      {
        generationName: new FormControl('', [Validators.required, Validators.maxLength(80), Validators.pattern('^[a-zA-Z0-9_() ]+$')]),
        grammarPart: new FormControl('', [Validators.required]),
        taskType: new FormControl('', [Validators.required]),
      }
    )

    this.grammarParts = this.staticValuesService.getAllGrammaprParts();
    this.taskTypeMap = this.staticValuesService.taskTypeMap.map(val => [val.key, val.value]);
  }

  ngOnInit(): void {
    this.analyseId = this.route.snapshot.paramMap.get('id');

    this.grammarAnalyse$ = this.grammarAnalyseApiService.getGrammarAnalyse(this.analyseId);
  }

  onGenerateTasks() {
    console.log('soasdfas')
    this.taskItemsForm.markAllAsTouched();

    if (this.taskItemsForm.invalid) {
      return;
    }

    const taskGenerion: TaskGenerationModel = {
      analyzeId: this.analyseId,
      taskType: this.taskItemsForm.controls['taskType'].value,
      grammarPart: this.taskItemsForm.controls['grammarPart'].value,
      name: this.taskItemsForm.controls['generationName'].value
    };

    this.isSendingRequest = true;
    this.taskGenerationService.generateTasks(taskGenerion).pipe(
      catchError((e) => {
        this.isSendingRequest = false;
        this.router.navigate(['../../../list'], { relativeTo: this.route });
        return throwError(e);
      })
    ).subscribe(x => {
      this.isSendingRequest = false;
      this.router.navigate(['../../../list'], { relativeTo: this.route });
    })
  }

  getFormControl(name: string): AbstractControl {
    return this.taskItemsForm.controls[name];
  }

  get taskTypeKeys(): string[] {
    return this.taskTypeMap.keys;
  }
}
