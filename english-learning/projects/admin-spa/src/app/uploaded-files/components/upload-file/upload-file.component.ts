import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FolderInfoModel } from '../../models/folder-info.model';
import { UploadNewFileModel } from '../../models/upload-new-file.model';
import { FileManagerApiService } from '../../services/file-manager-api.service';

@Component({
  selector: 'admin-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  public uploadForm: FormGroup;
  public isSendingRequest = false;

  public metadataValuesIndexName = 0;
  public metadataIndexes: string[] = [];
  public isCsvFile = false;
  public isUseReadFromColumn = false;

  public folderId: string;
  public folderPath$: Observable<string>;

  private uploadedFile: File;

  constructor(
    private fileManagerApiService: FileManagerApiService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) { 
      this.uploadForm = fb.group(
        {
          fileName: new FormControl('', [Validators.required, Validators.maxLength(80), Validators.pattern('^[a-zA-Z0-9_() ]+$')]),
          uploadFile: new FormControl('', [Validators.required]),
          csvColumnToRead: new FormControl('', [Validators.maxLength(30), Validators.pattern('^[a-zA-Z0-9_() ]+$')]),
        });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.folderId = id === 'null' ? null : id;
    
    if (this.folderId === null) {
      this.folderPath$ = of('');
    } else {
      this.folderPath$ = this.fileManagerApiService.getFolderInfo(this.folderId)
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

    this.isSendingRequest = true;
    const uploadFileModel = this.createUploadFileModel();
    this.fileManagerApiService.uploadNewFile(uploadFileModel).pipe(
        catchError((e) => {
          this.isSendingRequest = false;
          this.router.navigateByUrl('uploaded-files');
          return throwError(e);
        })
      ).subscribe(() => {
        this.isSendingRequest = false;
        this.router.navigateByUrl('uploaded-files');
      });
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

  onFileChange(event) {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      this.uploadedFile = files[0];

      if (this.uploadForm.controls['fileName'].value === '') {
        const fileNameWithoutExtension = this.getFileNameWithoutExtension(this.uploadedFile.name);
        this.uploadForm.controls['fileName'].setValue(fileNameWithoutExtension);

        const fileExtension = this.getFileExtension(this.uploadedFile.name);
        if (fileExtension.toLowerCase() === 'csv') {
          this.isCsvFile = true;
        }
      }
    } else {
      this.uploadedFile = null;
      this.isCsvFile = true;
      this.uploadForm.controls['csvColumnToRead'].setValue('');
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

  private getFileNameWithoutExtension(fileName: string): string {
    const indexOfDot = fileName.lastIndexOf('.');
    if (indexOfDot === -1) {
      return fileName;
    }

    return fileName.substring(0, indexOfDot);
  }

  private getFileExtension(fileName: string): string {
    const indexOfDot = fileName.lastIndexOf('.');
    if (indexOfDot === -1) {
      return null;
    }

    return fileName.substring(indexOfDot + 1);
  }

  private createUploadFileModel(): UploadNewFileModel {
    const newFile = new UploadNewFileModel();

    newFile.folderId = this.folderId;
    newFile.metadata = this.createMetadata();
    newFile.name = this.uploadForm.controls['fileName'].value;
    newFile.uploadedFile = this.uploadedFile;
    newFile.csvColumnToRead = this.uploadForm.controls['csvColumnToRead'].value;

    return newFile;
  }

  private createMetadata(): { [key: string]: string } {
    if (this.metadataIndexes.length === 0) {
      return {};
    }

    const metadataMap = {};
    for(let metadataIndex of this.metadataIndexes) {
      const key = this.uploadForm.controls[`${metadataIndex}-key`].value;
      const value = this.uploadForm.controls[`${metadataIndex}-value`].value;

      metadataMap[key] = value;
    }

    return metadataMap;
  }
}
