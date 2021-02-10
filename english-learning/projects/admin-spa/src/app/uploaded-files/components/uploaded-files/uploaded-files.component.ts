import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FileTreeModel } from '../../models/file-tree.model';
import { GridTreeItemModel } from '../../models/grid-tree-item.model';
import { FileManagerApiService } from '../../services/file-manager-api.service';
import { FileTreeMapperService } from '../../services/file-tree-mapper.service';

@Component({
  selector: 'admin-uploaded-files',
  templateUrl: './uploaded-files.component.html',
  styleUrls: ['./uploaded-files.component.scss']
})
export class UploadedFilesComponent implements OnInit {
  public gridItems$: Observable<GridTreeItemModel[]>;

  constructor(
    private fileManagerService: FileManagerApiService,
    private mapperService: FileTreeMapperService,
    private router: Router,
    private route: ActivatedRoute
  ) {
      this.gridItems$ = this.fileManagerService.getTree()
        .pipe(
          map((tree: FileTreeModel) => this.mapperService.mapApiTreeToGridItems(tree))
        );
  }

  ngOnInit(): void {
  }

  onDownloadFile(id: string) {
    this.fileManagerService.downloadFile(id)
      .subscribe((response: HttpResponse<Blob>) => {
        console.log(response);
        const contentDisposition = response.headers.get('content-disposition');
        const fileName = this.getFilenameFromContentDisposition(contentDisposition);

        const url = window.URL.createObjectURL(response.body);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
      });
  }

  onUploadFile(folderId: string) {
    this.router.navigate([`upload-file/${folderId}`], { relativeTo: this.route });
  }

  onAnalyseFile(fileId: string) {
    this.router.navigate([`analyse-form/${fileId}`], { relativeTo: this.route });
  }

  private getFilenameFromContentDisposition(contentDisposition: string): string {
    const regex = /filename=(?<filename>[^,;]+);/g;
    const match = regex.exec(contentDisposition);
    const filename = match.groups.filename
      .replace('"', '')
      .replace('"', '');

    return filename;
  }
}
