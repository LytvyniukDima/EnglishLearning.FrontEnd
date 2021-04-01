import { CompletedTaskInfoModel } from "./completed-task-info.model";
import { CourseItemModel } from "./course-item.model";

export interface TaskCourseItemModel extends CourseItemModel {
    grammarPart: string;
    taskToComplete: number;
    successRatePercentage: number;
    completedInfo: CompletedTaskInfoModel;
}