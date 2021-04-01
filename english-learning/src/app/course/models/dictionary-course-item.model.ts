import { CourseItemModel } from "./course-item.model";

export interface DictionaryCourseItemModel extends CourseItemModel {
    topic: string;
    wordsToLearn: number;
    learnedWords: number;
}