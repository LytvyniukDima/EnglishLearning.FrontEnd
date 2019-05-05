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
    infoModel.grammarPart = this.parseGrammarPart(infoModel.grammarPart);
    infoModel.taskType = this.parseTaskType(infoModel.taskType);

    return infoModel;
  }

  private parseGrammarPart(grammarPart: string): string {
    switch(grammarPart)
    {
      case 'PRSimple': {
        return 'Present Simple'
      }
      case 'PRContinuous': {
        return 'Present Continuous';
      }
      case 'AllSentences': {
        return 'All Sentences'
      }
      case 'Test': {
        return 'Test'
      }
      case 'PrSimpleAndPrContinuous': {
        return 'Present Simple and Present Continuous'
      }
      default: {
        return grammarPart;
      }
    }
  }

  private parseTaskType(taskType: string): string {
    switch(taskType)
    {
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
