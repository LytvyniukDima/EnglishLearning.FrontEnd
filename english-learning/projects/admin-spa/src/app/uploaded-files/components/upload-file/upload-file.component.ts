import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FolderInfoModel } from '../../models/folder-info.model';
import { FileManagerApiService } from '../../services/file-manager-api.service';

@Component({
  selector: 'admin-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  public uploadForm: FormGroup;

  public metadataValuesIndexName = 0;
  public metadataIndexes: string[] = [];
  
  public folderPath$: Observable<string>;

  constructor(
    private fileManagerApiService: FileManagerApiService,
    private route: ActivatedRoute,
    private fb: FormBuilder) { 
      this.uploadForm = fb.group({});
  }

  ngOnInit(): void {
    const folderId = this.route.snapshot.paramMap.get('id');
    
    if (folderId === null) {
      this.folderPath$ = of('');
    } else {
      this.folderPath$ = this.fileManagerApiService.getFolderInfo(folderId)
        .pipe(
          map(folder => this.getFolderPath(folder))
        );
    }
  }

  onUploadFile() {
    this.uploadForm.markAllAsTouched();

    if (this.uploadForm.invalid) {
      return;
    }

    const metadataMap = [];
    for(let metadataIndex of this.metadataIndexes) {
      const key = this.uploadForm.controls[`${metadataIndex}-key`].value;
      const value = this.uploadForm.controls[`${metadataIndex}-value`].value;

      metadataMap.push({ [key]: value });
    }
  }

  onAddMetadata() {
    const metadataIndex = `metadata-value-${this.metadataValuesIndexName}`;
    this.metadataIndexes.push(metadataIndex);

    this.uploadForm.addControl(`${metadataIndex}-key`, new FormControl('', [Validators.required, Validators.maxLength(50)]));
    this.uploadForm.addControl(`${metadataIndex}-value`, new FormControl('', [Validators.required, Validators.maxLength(100)]));

    this.metadataValuesIndexName++;
  }

  onRemoveMetadata(metadataIndex: string) {
    const indexOfRemoveItem = this.metadataIndexes.indexOf(metadataIndex);
    if (indexOfRemoveItem > -1) {
      this.metadataIndexes.splice(indexOfRemoveItem, 1);

      this.uploadForm.removeControl(`${metadataIndex}-key`);
      this.uploadForm.removeControl(`${metadataIndex}-value`);
    }
  }

  getMetadataKeyIndex(metadataIndex: string): string {
    return `${metadataIndex}-key`;
  }

  getMetadataValueIndex(metadataIndex: string): string {
    return `${metadataIndex}-value`;
  }

  getFormControl(name: string): AbstractControl {
    return this.uploadForm.controls[name];
  }

  getMetadataKeyControl(metadataIndex: string): AbstractControl {
    return this.getFormControl(this.getMetadataKeyIndex(metadataIndex));
  }

  getMetadataValueControl(metadataIndex: string): AbstractControl {
    return this.getFormControl(this.getMetadataValueIndex(metadataIndex));
  }

  private getFolderPath(folderInfo: FolderInfoModel): string {
    const path = folderInfo.path;
    path.push(folderInfo.name);

    return path.join('/');
  }
}
