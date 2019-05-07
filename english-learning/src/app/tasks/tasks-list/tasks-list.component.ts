import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { EnglishTaskInfoModel } from '../models/EnglishTaskInfoModel';
import { TasksService } from '../services/tasks.service';
import { TasksMapperService } from '../services/tasks-mapper.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  public taskInfoList: EnglishTaskInfoModel[];
  public englishLevels: string[];
  public grammarParts: string[];
  public englishLevelsMap = new Map();
  public grammarPartsMap = new Map();
  public grammarPartsFromSearch: string[] = [];
  public englishLevelsFromSearch: string[] = [];

  needScroll: EventEmitter<any> = new EventEmitter();

  @ViewChild('scroll') private scrollContainer: ElementRef;
  scrollParent: any;

  scrolledValue = 0;
  isScrolling = false;

  constructor(private tasksService: TasksService, private tasksMapper: TasksMapperService) { }

  ngOnInit() {
    this.getTasks();
    this.englishLevels = this.tasksMapper.getAllEnglishLevels();
    this.grammarParts = this.tasksMapper.getAllGrammaprParts();

    this.grammarParts.forEach((value, indes) => { this.grammarPartsMap.set(value, false) });
    this.englishLevels.forEach((value, index) => { this.englishLevelsMap.set(value, false) });

    console.log(this.scrollContainer.nativeElement)

    this.scrollParent = this.getScrollParent(this.scrollContainer.nativeElement);
    this.scrollParent.onscroll = () => this.onScroll()

    this.needScroll.subscribe((value) => {
      this.onScrollLoad();
    });
  }

  getTasks() {
    this.tasksService.getRandomTasksInfoList().subscribe(data => {
      console.log(data);
      this.taskInfoList = data;
      this.tasksMapper.fixNamingsForInfoModels(this.taskInfoList);
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      })
  }

  onSearch() {
    this.englishLevelsFromSearch = [];
    this.grammarPartsFromSearch = [];

    this.englishLevelsMap.forEach((value, key) => {
      if (value)
        this.englishLevelsFromSearch.push(key);
    })

    this.grammarPartsMap.forEach((value, key) => {
      if (value)
        this.grammarPartsFromSearch.push(key);
    })

    this.grammarPartsFromSearch = this.tasksMapper.mapToApiGrammarParts(this.grammarPartsFromSearch);

    console.log(this.grammarPartsFromSearch);

    if (this.englishLevelsFromSearch.length > 0 || this.grammarPartsFromSearch.length > 0) {
      this.tasksService.getFilteredRandomInfoTasks(this.englishLevelsFromSearch, this.grammarPartsFromSearch).subscribe(data => {
        console.log(data);
        this.taskInfoList = data;
        this.tasksMapper.fixNamingsForInfoModels(this.taskInfoList);
      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        })
    } else {
      this.getTasks();
    }
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

  onChangedGrammarPartBox(event) {
    let target = event.target;
    let value = target.value;

    if (target.checked) {
      this.grammarPartsMap.set(value, true);
    } else {
      this.grammarPartsMap.set(value, false);
    }

    console.log(event);
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
    if (this.englishLevelsFromSearch.length > 0 || this.grammarPartsFromSearch.length > 0) {
      this.tasksService.getFilteredRandomInfoTasks(this.englishLevelsFromSearch, this.grammarPartsFromSearch).subscribe(data => {
        this.taskInfoList = this.taskInfoList.concat(data);
        this.tasksMapper.fixNamingsForInfoModels(this.taskInfoList);
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
      this.tasksService.getRandomTasksInfoList().subscribe(data => {
        this.taskInfoList = this.taskInfoList.concat(data);
        console.log(this.taskInfoList);
        this.tasksMapper.fixNamingsForInfoModels(this.taskInfoList);
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
