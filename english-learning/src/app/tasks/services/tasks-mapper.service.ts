import { Injectable } from '@angular/core';
import { EnglishTaskInfoModel } from '../models/EnglishTaskInfoModel';

@Injectable({
    providedIn: 'root'
})
export class TasksMapperService {

    constructor() {
    }

    public fixNamingsForInfoModels(infoModels: EnglishTaskInfoModel[]): EnglishTaskInfoModel[] {
        for (let i = 0; i < infoModels.length; i++) {
            infoModels[i] = this.fixNamingsForInfoModel(infoModels[i]);
        }

        return infoModels;
    }

    public fixNamingsForInfoModel(infoModel: EnglishTaskInfoModel): EnglishTaskInfoModel {
        infoModel.taskType = this.parseTaskType(infoModel.taskType);

        return infoModel;
    }

    public getAllGrammaprParts(): string[] {
        return [
            "Present Simple",
            "Present Continuous",
            'All Sentences',
            'Test',
            'Present Simple and Present Continuous',
            "Future Plans",
            "Question Tags",
            "Possessive Adjectives",
            "Suffixes",
            "Present Perfect"
        ]
    }

    public getAllEnglishLevels(): string[] {
        return [
            "None",
            "Elementary",
            "PreIntermediate",
            'Intermediate',
            'UpperIntermediate',
            'Advanced'
        ]
    }

    public parseTaskType(taskType: string): string {
        switch (taskType) {
            case 'SimpleBrackets': {
                return 'Put into the correct form'
            }
            case 'WordsFromBox': {
                return 'WordsFromBox';
            }
            case 'CorrectAlternative': {
                return 'Choose correct alternative'
            }
            case 'CorrectOrder': {
                return 'CorrectOrder'
            }
            case 'DivisionBySlash': {
                return 'Choose correct alternative';
            }
            case 'CorrectOption': {
                return 'Choose correct option';
            }
            default: {
                return taskType;
            }
        }
    }
}
