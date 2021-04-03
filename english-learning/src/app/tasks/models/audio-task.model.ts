import { ParsedSentTaskModel } from "./parsed-sent-task.model";

export class AudioTaskModel {
    englishLevel: string;
    grammarPart: string;
    sents: ParsedSentTaskModel[]; 
}