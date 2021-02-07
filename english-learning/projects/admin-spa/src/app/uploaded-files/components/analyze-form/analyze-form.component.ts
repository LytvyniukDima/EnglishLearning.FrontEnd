import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FileDetailsModel } from '../../models/file-details.model';
import { FileManagerApiService } from '../../services/file-manager-api.service';

@Component({
  selector: 'admin-analyze-form',
  templateUrl: './analyze-form.component.html',
  styleUrls: ['./analyze-form.component.scss']
})
export class AnalyzeFormComponent implements OnInit {
  fileDetails$: Observable<FileDetailsModel>;

  public analyseForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fileManagerService: FileManagerApiService,
    private fb: FormBuilder) { 
      this.analyseForm = fb.group(
        {
          analyseName: new FormControl('', [Validators.required, Validators.maxLength(80), Validators.pattern('^[a-zA-Z0-9_() ]+$')]),
        }
      )
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.fileDetails$ = this.fileManagerService.getFileDetails(id);
  }

  onAnalyseFile() {

  }

  getFormControl(name: string): AbstractControl {
    return this.analyseForm.controls[name];
  }
}
