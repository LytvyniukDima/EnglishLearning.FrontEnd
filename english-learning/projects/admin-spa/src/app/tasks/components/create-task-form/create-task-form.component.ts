import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { StaticTaskValuesService } from "../../../common/tasks/static-task-values.service";
import { CreateTaskFromRandomModel } from "../../models/create-task-from-random.model";
import { CreateTaskApiService } from "../../services/create-task-api.service";

@Component({
  selector: "admin-create-task-form",
  templateUrl: "./create-task-form.component.html",
  styleUrls: ["./create-task-form.component.scss"],
})
export class CreateTaskFormComponent implements OnInit {
  isSendingRequest = false;

  public taskForm: FormGroup;
  public isGenerateFromRandomTasks = true;
  public itemsCount = 6;

  public grammarParts: string[];
  public taskTypeMap: any;

  public selectedItems: string[];

  constructor(
    private fb: FormBuilder,
    private staticValuesService: StaticTaskValuesService,
    private createTaskService: CreateTaskApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.taskForm = fb.group({
      grammarPart: new FormControl("", [Validators.required]),
      taskType: new FormControl("", [Validators.required]),
    });

    this.grammarParts = this.staticValuesService.getAllGrammaprParts();
    this.taskTypeMap = this.staticValuesService.taskTypeMap.map((val) => [
      val.key,
      val.value,
    ]);
  }

  ngOnInit(): void {}

  onCreateTasks() {
    this.taskForm.markAllAsTouched();

    if (this.taskForm.invalid || this.isTaskItemsSelectedIncorrect) {
      return;
    }

    if (this.isGenerateFromRandomTasks) {
      this.createRandomTask();
    } else {
      this.createFromItems();
    }
  }

  getFormControl(name: string): AbstractControl {
    return this.taskForm.controls[name];
  }

  onChangedRandomBox(event) {
    const target = event.target;
    this.selectedItems = [];

    if (target.checked) {
      this.isGenerateFromRandomTasks = true;
    } else {
      this.isGenerateFromRandomTasks = false;
    }
  }

  onChangeItemsCount(event) {
    this.itemsCount = event.target.value;
  }

  onSelectedItemsChanged(items: string[]) {
    this.selectedItems = items;
  }

  private createRandomTask() {
    const model: CreateTaskFromRandomModel = {
      grammarPart: this.taskForm.controls["grammarPart"].value,
      taskType: this.taskForm.controls["taskType"].value,
      englishLevel: "None",
      itemsCount: this.itemsCount,
    };

    this.createTaskService
      .createFromRandomItems(model)
      .pipe(
        catchError((e) => {
          this.isSendingRequest = true;
          this.router.navigate(["../items"], { relativeTo: this.route });
          return throwError(e);
        })
      )
      .subscribe((x) => {
        this.isSendingRequest = true;
        this.router.navigate(["../items"], { relativeTo: this.route });
      });
  }

  get isTaskItemsSelectedIncorrect(): boolean {
    if (this.isGenerateFromRandomTasks) {
      return false;
    }

    return (
      this.selectedItems === undefined ||
      this.selectedItems.length < 6 ||
      this.selectedItems.length > 12
    );
  }

  private createFromItems() {}
}
