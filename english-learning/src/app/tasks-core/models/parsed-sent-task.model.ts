import { SentTokenTaskModel } from "./sent-token-task.model";

export interface ParsedSentTaskModel {
    id: string;
    analyzeId: string;
    sent: string;
    sentType: string;
    englishLevel: string;
    tokens: SentTokenTaskModel[];
}