import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EnglishTextInfoModel } from '../models/EnglishTextInfoModel';
import { EnglishTextFullFilterModel } from '../models/EnglishTextFullFilterModel';
import { MultimediaService } from '../services/multimedia.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.css']
})
export class TextListComponent implements OnInit {
  public textList: EnglishTextInfoModel[];
  public textFilter: EnglishTextFullFilterModel;
  public englishLevelsKeys: string[] = [];
  public textTypesKeys: string[] = [];
  
  public textSearch = "";
  public textTypesFromSearch: string[] = [];
  public englishLevelsFromSearch: string[] = [];
  public textTypesMap = new Map();
  public englishLevelsMap = new Map();

  @ViewChild('scroll') private scrollContainer: ElementRef;
  scrollParent: any;

  scrolledValue = 0;
  isScrolling = false;
  
  constructor(private multimediaService: MultimediaService) { }

  ngOnInit() {
    this.getTexts();
    this.getFilter();

    this.scrollParent = this.getScrollParent(this.scrollContainer.nativeElement);
    this.scrollParent.onscroll = () => this.onScroll()
  }

  getTexts() {
    this.multimediaService.getRandomInfoTextsList().subscribe(data => {
      console.log(data);
      this.textList = data;
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
    this.multimediaService.getFullTextFilter().subscribe(data => {
      console.log(data);
      this.textFilter = data;

      this.englishLevelsKeys = [];
      this.textTypesKeys = [];

      for (let englishLevel in this.textFilter.englishLevelFilterOptions.filterOptions) {
        this.englishLevelsKeys.push(englishLevel);
      }

      for (let textType in this.textFilter.textTypeFilterOptions.filterOptions) {
        this.textTypesKeys.push(textType);
      }

      console.log(this.englishLevelsKeys)
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

  onChangedTextTypeBox(event) {
    let target = event.target;
    let value = target.value;

    if (target.checked) {
      this.textTypesMap.set(value, true);
    } else {
      this.textTypesMap.set(value, false);
    }

    console.log(event);
  }

  onSearch() {
    this.englishLevelsFromSearch = [];
    this.textTypesFromSearch = [];

    this.englishLevelsMap.forEach((value, key) => {
      if (value)
        this.englishLevelsFromSearch.push(key);
    })

    this.textTypesMap.forEach((value, key) => {
      if (value)
        this.textTypesFromSearch.push(key);
    })

    this.makeSearch();
  }

  makeSearch() {
    if (this.englishLevelsFromSearch.length > 0 || this.textTypesFromSearch.length > 0 || this.textSearch || this.textSearch.length > 0) {
      this.multimediaService.getFilteredRandomTexts(this.textSearch, this.englishLevelsFromSearch, this.textTypesFromSearch).subscribe(data => {
        console.log(data);
        this.textList = data;
      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        })
    } else {
      this.getTexts();
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
    if (this.englishLevelsFromSearch.length > 0 || this.textTypesFromSearch.length > 0 || this.textSearch.length > 0) {
      this.multimediaService.getFilteredRandomTexts(this.textSearch, this.englishLevelsFromSearch, this.textTypesFromSearch).subscribe(data => {
        this.textList = this.textList.concat(data);
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
      this.multimediaService.getRandomInfoTextsList().subscribe(data => {
        this.textList = this.textList.concat(data);
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
