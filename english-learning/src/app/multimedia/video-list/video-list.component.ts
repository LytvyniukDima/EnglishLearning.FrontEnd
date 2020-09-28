import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EnglishVideoModel } from '../models/EnglishVideoModel';
import { MultimediaService } from '../services/multimedia.service';
import { HttpErrorResponse } from '@angular/common/http';
import { EnglishVideoFullFilterModel } from '../models/EnglishVideoFullFilterModel';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  public videoList: EnglishVideoModel[];
  public videoFilter: EnglishVideoFullFilterModel;
  public englishLevelsKeys: string[];
  public videoTypesKeys: string[];
  
  public textSearch = "";
  public videoTypesFromSearch: string[] = [];
  public englishLevelsFromSearch: string[] = [];
  public videoTypesMap = new Map();
  public englishLevelsMap = new Map();

  @ViewChild('scroll', { static: true }) private scrollContainer: ElementRef;
  scrollParent: any;

  scrolledValue = 0;
  isScrolling = false;
  
  constructor(private multimediaService: MultimediaService) { }

  ngOnInit() {
    this.getVideos();
    this.getFilter();

    this.scrollParent = this.getScrollParent(this.scrollContainer.nativeElement);
    this.scrollParent.onscroll = () => this.onScroll()
  }

  getVideos() {
    this.multimediaService.getRandomFullVideosList().subscribe(data => {
      console.log(data);
      this.videoList = data;
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      })
  }

  getFilter() {
    this.multimediaService.getFullVideoFilter().subscribe(data => {
      console.log(data);
      this.videoFilter = data;

      this.englishLevelsKeys = [];
      this.videoTypesKeys = [];

      for (let englishLevel in this.videoFilter.englishLevelFilterResult.filterOptions) {
        this.englishLevelsKeys.push(englishLevel);
      }

      for (let videoType in this.videoFilter.videoTypeFilterResult.filterOptions) {
        this.videoTypesKeys.push(videoType);
      }
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      })
  }

  onChangeSearchField(event) {
    this.textSearch = event.target.value;

    this.makeSearch();
  }

  onChagedEnglishLevelBox(event) {
    let target = event.target;
    let value = target.value;

    if (target.checked) {
      this.englishLevelsMap.set(value, true);
    } else {
      this.englishLevelsMap.set(value, false);
    }

    console.log(event);
  }

  onChangedVideoTypeBox(event) {
    let target = event.target;
    let value = target.value;

    if (target.checked) {
      this.videoTypesMap.set(value, true);
    } else {
      this.videoTypesMap.set(value, false);
    }

    console.log(event);
  }

  onSearch() {
    this.englishLevelsFromSearch = [];
    this.videoTypesFromSearch = [];

    this.englishLevelsMap.forEach((value, key) => {
      if (value)
        this.englishLevelsFromSearch.push(key);
    })

    this.videoTypesMap.forEach((value, key) => {
      if (value)
        this.videoTypesFromSearch.push(key);
    })

    this.makeSearch();
  }

  makeSearch() {
    if (this.englishLevelsFromSearch.length > 0 || this.videoTypesFromSearch.length > 0 || this.textSearch || this.textSearch.length > 0) {
      this.multimediaService.getFilteredRandomVideos(this.textSearch, this.englishLevelsFromSearch, this.videoTypesFromSearch).subscribe(data => {
        console.log(data);
        this.videoList = data;
      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        })
    } else {
      this.getVideos();
    }
  }

  onScroll() {
    let element: HTMLElement = document.getElementById('scroll2');
    console.log(element)

    let scrollFunc = function (node: HTMLElement): HTMLElement {
      if (node.parentElement == null) {
        return node;
      }

      if (node.scrollHeight > node.clientHeight) {
        return node;
      } else {
        return scrollFunc(node.parentElement);
      }
    }

    let newScrollParent = scrollFunc(element);

    let scrolledValue = newScrollParent.scrollTop + newScrollParent.clientHeight;
    let maxScroll = newScrollParent.scrollHeight - 20;

    if (scrolledValue > this.scrolledValue && scrolledValue > maxScroll && !this.isScrolling) {
      console.log("needScroll");
      this.isScrolling = true;
      this.onScrollLoad();
    }
    this.scrolledValue = scrolledValue;
  }

  getScrollParent(node) {
    if (node.parentNode == null) {
      return node;
    }

    if (node.scrollHeight > node.clientHeight) {
      return node;
    } else {
      return this.getScrollParent(node.parentNode);
    }
  }

  onScrollLoad() {
    if (this.englishLevelsFromSearch.length > 0 || this.videoTypesFromSearch.length > 0 || this.textSearch.length > 0) {
      this.multimediaService.getFilteredRandomVideos(this.textSearch, this.englishLevelsFromSearch, this.videoTypesFromSearch).subscribe(data => {
        this.videoList = this.videoList.concat(data);
        this.isScrolling = false;
      },
        (err: HttpErrorResponse) => {
          this.isScrolling = false;
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        })
    } else {
      this.multimediaService.getRandomFullVideosList().subscribe(data => {
        this.videoList = this.videoList.concat(data);
        this.isScrolling = false;
      },
        (err: HttpErrorResponse) => {
          this.isScrolling = false;
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        });
    }
  }
}
