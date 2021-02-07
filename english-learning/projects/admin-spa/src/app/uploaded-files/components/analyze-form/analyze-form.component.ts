import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AnalyzeFileForm } from '../../models/analyze-file-form';
import { FileDetailsModel } from '../../models/file-details.model';
import { FileManagerApiService } from '../../services/file-manager-api.service';
import { TextAnalyzerApiService } from '../../services/text-analyzer-api.service';

@Component({
  selector: 'admin-analyze-form',
  templateUrl: './analyze-form.component.html',
  styleUrls: ['./analyze-form.component.scss']
})
export class AnalyzeFormComponent implements OnInit {
  private fileId: string;
  fileDetails$: Observable<FileDetailsModel>;
  isSendingRequest = false;

  public analyseForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fileManagerService: FileManagerApiService,
    private textAnalyzerService: TextAnalyzerApiService,
    private fb: FormBuilder) { 
      this.analyseForm = fb.group(
        {
          analyseName: new FormControl('', [Validators.required, Validators.maxLength(80), Validators.pattern('^[a-zA-Z0-9_() ]+$')]),
        }
      )
    }

  ngOnInit(): void {
    this.fileId = this.route.snapshot.paramMap.get('id');
    
    this.fileDetails$ = this.fileManagerService.getFileDetails(this.fileId);
  }

  onAnalyseFile() {
    const form: AnalyzeFileForm = {
      fileId: this.fileId,
      analyzeName: this.analyseForm.controls['analyseName'].value
    }

    this.isSendingRequest = true;
    this.textAnalyzerService.analyzeFile(form).subscribe(() => {
      this.isSendingRequest = false;
      this.router.navigateByUrl('uploaded-files');
    });
  }

  getFormControl(name: string): AbstractControl {
    return this.analyseForm.controls[name];
  }
}
